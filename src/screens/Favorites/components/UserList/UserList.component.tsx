import React from "react";
import { Flex } from "components/Flex/Flex.component";
import { Spacer } from "components/Spacer/Spacer.component";
import { UserCard } from "components/UserCard/UserCard.component";

export function UserList() {
  return (
    <Flex>
      <Spacer vertical size={8} />
      <Spacer vertical size={8}>
        <UserCard deleteCard />
      </Spacer>
      <Spacer vertical size={8}>
        <UserCard deleteCard />
      </Spacer>
      <Spacer vertical size={8}>
        <UserCard deleteCard />
      </Spacer>
    </Flex>
  );
}
