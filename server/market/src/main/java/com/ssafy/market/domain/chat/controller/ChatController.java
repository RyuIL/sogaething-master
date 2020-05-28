package com.ssafy.market.domain.chat.controller;

import com.ssafy.market.domain.chat.domain.ChatMessage;
import com.ssafy.market.domain.chat.domain.MessageType;
import com.ssafy.market.domain.chat.service.ChatRoomService;
import com.ssafy.market.domain.chat.service.ChatService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {

    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);

    private final ChatService chatService;
    private final ChatRoomService chatRoomService;

    /**
     * websocket "/pub/chat/message"로 들어오는 메시징을 처리한다.
     */
    @MessageMapping("/chat/message")
    public void sendMessage(ChatMessage message) {
        System.out.println("message: " + message);
        if (MessageType.ENTER.equals(message.getType())) {
            chatRoomService.enterChatRoom(message.getRoomId());
            message.setMessage(message.getSender() + "님이 입장하셨습니다.");
        }
        // WebSocket 에 발행된 메시지를 redis로 발행한다.(publish)
//        redisPublisher.publish(chatRoomRepository.getTopic(message.getRoomId()), message);
        chatService.sendMessage(message);
    }

    @ApiOperation(value = "특정 방의 채팅메시지를 가져온다.", response=List.class)
    @GetMapping("/message/{roomId}")
    public List<ChatMessage> findChatMessagesByRoomId(@PathVariable String roomId){
        List<ChatMessage> result = chatService.findChatMessagesByRoomId(roomId);
        return result;
    }
}