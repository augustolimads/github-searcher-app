import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//aqui vou importar as screens
import { UsersScreen } from "../screens/Users/Users.screen";
import { ReposScreen } from "../screens/Repos/Repos.screen";

const Stack = createStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator initialRouteName="Users" headerMode="none">
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Repos" component={ReposScreen} />
    </Stack.Navigator>
  );
}
