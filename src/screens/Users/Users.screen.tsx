import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Container } from "../../components/Container/Container.component";
import { Search } from "../../components/Search/Search.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { Flex } from "../../components/Flex/Flex.component";
import { EmptyList } from "./components/EmptyList/EmptyList.component";
import UserList from "./components/UserList/UserList.component";
import { api } from "../../service";
import { userRequest } from "../../service/userRequest.service";
import { User } from "../../@types/User";
import { colors } from "../../theme/colors";

export function UsersScreen() {
  const [input, setInput] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);
    let request;
    let result;
    try {
      request = await api.get("search/users", {
        params: { q: searchedUser },
      });
      result = await userRequest(request);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    } finally {
      setUsers(result);
      console.log(result);
    }
  }

  function handleSubmit() {
    setSearchedUser(input);
  }

  useEffect(() => {
    getUsers();
  }, [searchedUser]);

  return (
    <Container>
      <View>
        <Spacer vertical size={20} />
        <Search value={input} setValue={setInput} handleSubmit={handleSubmit} />
      </View>
      <Flex>
        <Spacer vertical size={20} />
        {loading && (
          <ActivityIndicator size="large" color={colors.blueHighlight} />
        )}
        {!loading && users && users.length >= 1 ? (
          <UserList users={users} />
        ) : (
          <EmptyList />
        )}
      </Flex>
    </Container>
  );
}
