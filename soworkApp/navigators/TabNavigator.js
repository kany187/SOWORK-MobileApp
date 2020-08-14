import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import ServiceScreen from "../screens/ServiceScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MediaScreen from "../screens/MediaScreen";

const activeColor = "#4775f2";
const inactiveColor = "#ffffff95";

// "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: ProfileScreen
    // MenuScreen: Menu
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const Service = createStackNavigator({
  Services: ServiceScreen
});

Service.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-calendar"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const RecentService = createStackNavigator({
  Recent: MediaScreen
});

RecentService.navigationOptions = {
  tabBarLabel: "Media",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-chatbubbles"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const Media = createStackNavigator({
  Social: HistoryScreen
});

Media.navigationOptions = {
  tabBarLabel: "History",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    Service,
    Media,
    RecentService
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#00D18B"
      }
    }
  }
);

export default TabNavigator;
