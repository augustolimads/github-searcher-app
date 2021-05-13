import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//aqui vou importar as screens
import { ListAllScreen } from "../screens/ListAll/ListAll.screen";
import { ListRepos } from "../screens/ListRepos/ListRepos.screen";

const Stack = createStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator initialRouteName="ListAllScreen" headerMode="none">
      <Stack.Screen name="ListAllScreen" component={ListAllScreen} />
      <Stack.Screen name="ListRepos" component={ListRepos} />
    </Stack.Navigator>
  );
}
