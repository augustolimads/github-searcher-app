import React from "react";
import { FlatList } from "react-native";
import { Flex } from "components/Flex/Flex.component";
import { Spacer } from "components/Spacer/Spacer.component";
import RepoCard from "../RepoCard/RepoCard.component";

export function RepoList({ userRepos }) {
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
      />
    </Flex>
  );
}
