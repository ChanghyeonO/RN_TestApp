import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Activity from "./src/screens/Activity";
import Profile from "./src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import Status from "./src/screens/Status";
import FriendProfile from "./src/screens/FriendProfile";
import EditProfile from "./src/screens/EditProfile";
import Ionicons from "react-native-vector-icons/Ionicons";

type RootStackParamList = {
    Bottom: undefined;
    Status: { name: string; image: any };
    FriendProfile: undefined;
    EditProfile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                  height: 70,
              },
              tabBarIcon: ({ focused, size, color }) => {
                  let iconName: string;
                  if (route.name === "Home") {
                      iconName = focused ? "home-sharp" : "home-outline";
                  } else if (route.name === "Search") {
                      iconName = focused ? "search" : "search-outline";
                  } else if (route.name === "Activity") {
                      iconName = focused ? "heart" : "heart-outline";
                  } else if (route.name === "Profile") {
                      iconName = focused ? "person-circle" : "person-circle-outline";
                  } else {
                      iconName = "alert-circle"; // 기본 아이콘
                  }
                  return <Ionicons name={iconName as string} size={size} color={color} />;
              },
          })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
};

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="FriendProfile" component={FriendProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
