package com.ssafy.market.domain.matching.resolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.ssafy.market.domain.detaildeal.dto.DetailOutput;
import com.ssafy.market.domain.file.domain.File;
import com.ssafy.market.domain.file.repository.FileRepository;
import com.ssafy.market.domain.hashtag.domain.Hashtag;
import com.ssafy.market.domain.hashtag.domain.MatchingHashtag;
import com.ssafy.market.domain.hashtag.repository.HashtagRepository;
import com.ssafy.market.domain.hashtag.repository.MatchingHashtagRepository;
import com.ssafy.market.domain.history.domain.History;
import com.ssafy.market.domain.history.dto.UserHistoryResponse;
import com.ssafy.market.domain.history.respository.HistoryRepository;
import com.ssafy.market.domain.matching.domain.Matching;
import com.ssafy.market.domain.matching.dto.MatchInput;
import com.ssafy.market.domain.matching.dto.MatchResponse;
import com.ssafy.market.domain.matching.respository.MatchingRepository;
import com.ssafy.market.domain.post.domain.Post;
import com.ssafy.market.domain.post.dto.PostDetailOutput;
import com.ssafy.market.domain.post.repository.PostRepository;
import com.ssafy.market.domain.post.resolver.PostQuery;
import com.ssafy.market.domain.product.domain.Product;
import com.ssafy.market.domain.product.repository.ProductRepository;
import com.ssafy.market.domain.user.domain.User;
import com.ssafy.market.domain.user.dto.UserInfoOutput;
import com.ssafy.market.domain.user.repository.UserRepository;
import com.ssafy.market.domain.user.security.TokenProvider;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MatchingQuery implements GraphQLQueryResolver {
    private final MatchingRepository matchingRepository;
    private final MatchingHashtagRepository matchingHashtagRepository;
    private final TokenProvider tokenProvider;
    private final PostQuery postQuery;

    public List<MatchResponse> findMatchingByUserId(DataFetchingEnvironment env){
        Long userId = tokenProvider.getUserIdFromHeader(env);
        List<Matching> matching = matchingRepository.findTop5ByUserId(userId);
        List<MatchResponse> responses = new ArrayList<>();
        for (int i = 0; i < matching.size(); i++) {
            List<MatchingHashtag> matchingHashtag = matchingHashtagRepository.findByMatching(matching.get(i));
            String[] hashtags = new String[matchingHashtag.size()];
            for (int j = 0; j < matchingHashtag.size(); j++) {
                hashtags[j] = matchingHashtag.get(j).getHashtag();
            }
            List<PostDetailOutput> postDetailOutputs = postQuery.matchThings(matching.get(i).getMatchingId());

            String possibility = "";
            if(postDetailOutputs.size()<=5) {
                possibility = "매칭확률낮음";
            }else if(postDetailOutputs.size()<=10) {
                possibility = "매칭확률중간";
            }else {
                possibility = "매칭확률높음";
            }
            MatchResponse matchResponse = MatchResponse.builder()
                    .matchingId(matching.get(i).getMatchingId())
                    .category(matching.get(i).getCategory())
                    .createdDate(matching.get(i).getCreatedDate())
                    .maxPrice(matching.get(i).getMaxPrice())
                    .minPrice(matching.get(i).getMinPrice())
                    .possibility(possibility)
                    .hashtag(Arrays.asList(hashtags))
                    .build();

            responses.add(matchResponse);
        }
        return responses;
    }
}
