import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeRoutes } from "./home.routes";

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
    </Stack.Navigator>
  );
}
