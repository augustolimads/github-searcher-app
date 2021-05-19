import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { EmptyList } from "../../../../components/EmptyList/EmptyList.component";
import { Flex } from "../../../../components/Flex/Flex.component";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { colors } from "../../../../theme/colors";
import RepoCard from "../RepoCard/RepoCard.component";

interface RepoListProps {
  userRepos: any[];
  loadingMore: boolean;
  getMoreRepos: any;
}

export function RepoList({
  userRepos,
  loadingMore,
  getMoreRepos,
}: RepoListProps) {
  if (!userRepos || userRepos.length < 1)
    return <EmptyList text="Este usuário não possui nenhum repositório..." />;

  return (
    <Flex>
      <FlatList
        data={userRepos}
        keyExtractor={(item) => String(item.id)}
        renderItem={(repo) => (
          <Spacer vertical size={8}>
            <RepoCard repo={repo.item} />
          </Spacer>
        )}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) =>
          getMoreRepos && getMoreRepos(distanceFromEnd)
        }
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator color={colors.blueHighlight} />
          ) : (
            <></>
          )
        }
      />
    </Flex>
  );
}
