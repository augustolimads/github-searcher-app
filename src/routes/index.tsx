import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoritesScreen } from "../screens/Favorites/Favorites.screen";
import { colors } from "../theme/colors";
import { FontAwesome } from "@expo/vector-icons";
import { UserStack } from "./userStack.routes";

const Tab = createBottomTabNavigator();

interface RouteProps {
  route: { name: string };
  size: number;
  color: string;
}

const TAB_ICON = {
  Users: "search",
  Favorites: "heart",
};

const createScreenOptions = ({ route }: RouteProps) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }: RouteProps) => (
      <FontAwesome name={iconName} size={size} color={color} />
    ),
  };
};

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          activeTintColor: colors.black,
          inactiveTintColor: colors.darkGray,
          style: {
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: colors.lightGray,
          },
        }}
      >
        <Tab.Screen name="Users" component={UserStack} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
