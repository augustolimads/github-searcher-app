import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListAllScreen } from "../screens/ListAll/ListAll.screen";
import { FavoriteScreen } from "../screens/Favorite/Favorite.screen";
import { colors } from "../config/theme/colors";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

interface RouteProps {
  route: { name: string };
  size: number;
  color: string;
}

const TAB_ICON = {
  ListAll: "search",
  Favorite: "heart",
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
        <Tab.Screen name="ListAll" component={ListAllScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
