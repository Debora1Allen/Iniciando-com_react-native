import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@screens/home/Home";

const Tab = createBottomTabNavigator();

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

const WatchList = () => {
  return (
    <View>
      <Text>WathList</Text>
    </View>
  );
};

export function HomeRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#242A32",
          height: 88,
          paddingTop: 16,
        },
        tabBarActiveTintColor: "#0296E5",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "#0296E5" : "#67686D"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={24}
              color={focused ? "#0296E5" : "#67686D"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={focused ? "#0296E5" : "#67686D"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
