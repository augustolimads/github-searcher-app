import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Container } from "../../components/Container/Container.component";
import { Search } from "../../components/Search/Search.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { Flex } from "../../components/Flex/Flex.component";
import { api } from "../../service";
import { userRequest } from "../../service/userRequest.service";
import { User } from "../../@types/User";
import { colors } from "../../theme/colors";
import UserList from "../../components/UserList/UserList.component";

export function UsersScreen() {
  const [input, setInput] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  async function getUsers() {
    let request;
    let result: any[];
    try {
      request = await api.get("search/users", {
        params: { q: searchedUser, per_page: 8, page },
      });
      result = await userRequest(request);
      if (!result) return setLoading(true);
      if (page > 1) {
        setUsers((oldValue) => [...oldValue, ...result]);
      } else {
        setUsers(result);
      }
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  function getMoreUsers(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    getUsers();
  }

  function handleSubmit() {
    if (input !== searchedUser) {
      setLoading(true);
      setSearchedUser(input);
      setPage(1);
      setUsers([]);
    }
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
        {loading ? (
          <ActivityIndicator size="large" color={colors.blueHighlight} />
        ) : (
          <UserList
            users={users}
            loadingMore={loadingMore}
            getMoreUsers={getMoreUsers}
          />
        )}
      </Flex>
    </Container>
  );
}
