package com.ssafy.market.domain.chat.repository;

import com.ssafy.market.domain.chat.domain.ChatMessage;
import com.ssafy.market.domain.chat.domain.ChatRoom;
import com.ssafy.market.domain.chat.redis.RedisPublisher;
import com.ssafy.market.domain.chat.redis.RedisSubscriber;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@RequiredArgsConstructor
@Repository
public class ChatRepository {
    // 채팅방(topic)에 발행되는 메시지를 처리할 Listener
    private final RedisMessageListenerContainer redisMessageListener;
    // 구독 처리 서비스
    private final RedisSubscriber redisSubscriber;
    private final RedisPublisher redisPublisher;
    // Redis
    private static final String CHAT_ROOMS = "CHAT_ROOM";
    private static final String CHAT_MESSAGES = "CHAT_MESSAGES";
    private final RedisTemplate<String, Object> redisTemplate;
    private HashOperations<String, String, ChatRoom> opsHashChatRoom;
    private HashOperations<String, String, ChatMessage> opsHashChatMessage;
    // 채팅방의 대화 메시지를 발행하기 위한 redis topic 정보, 서버별로 채팅방에 매치되는 topic 정보를 Map 에 넣어 roomId로 찾을 수 있도록 한다.
    private Map<String, ChannelTopic> topics;

    @PostConstruct
    private void init(){
        opsHashChatRoom= redisTemplate.opsForHash();
        opsHashChatMessage = redisTemplate.opsForHash();
        topics = new HashMap<>();
    }

    public List<ChatRoom> findAllRoom() {
        return opsHashChatRoom.values(CHAT_ROOMS);
    }

    public ChatRoom findRoomById(String id) {
        return opsHashChatRoom.get(CHAT_ROOMS, id);
    }

    /**
     * 채팅방 생성 : 서버간 채팅방 공유를 위해 redis hash에 저장한다.
     */
    public ChatRoom createChatRoom(ChatRoom chatRoom) {
//        ChatRoom chatRoom = ChatRoom.create(name);
        opsHashChatRoom.put(CHAT_ROOMS, chatRoom.getPostId(), chatRoom);
//        System.out.println(opsHashChatRoom.entries(CHAT_ROOMS));
//        System.out.println(opsHashChatRoom.get(CHAT_ROOMS, chatRoom.getPostId()));

        return chatRoom;
    }

    /**
     * 채팅방 입장 : redis에 topic을 만들고 pub/sub 통신을 하기 위해 리스너를 설정한다.
     */
    public void enterChatRoom(String roomId) {
        ChannelTopic topic = topics.get(roomId);
        if (topic == null) {
            topic = new ChannelTopic(roomId);
            redisMessageListener.addMessageListener(redisSubscriber, topic);
            topics.put(roomId, topic);
        }
    }

    public void sendMessage(ChatMessage chatMessage) {
        ChannelTopic channelTopic = getTopic(chatMessage.getRoomId());
        redisPublisher.publish(channelTopic, chatMessage);
        System.out.println("들어오는 거: " + chatMessage);

        String messageKey = String.valueOf(opsHashChatMessage.increment("CHAT_MESSAGES", chatMessage.getRoomId(), 1));
//        System.out.println(opsHashChatMessage.increment("CHAT_MESSAGES", chatMessage.getRoomId(), 1).getClass().getName());
        System.out.println(opsHashChatRoom.entries(CHAT_MESSAGES));
        opsHashChatMessage.put(CHAT_MESSAGES, messageKey, chatMessage);
    }

    public ChannelTopic getTopic(String roomId) {
        return topics.get(roomId);
    }
}
