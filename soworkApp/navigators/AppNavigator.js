import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabNavigator from "./TabNavigator";
import Menu from "../components/Menu";
import RequestScreen from "../screens/RequestScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Request: RequestScreen
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(TabNavigator);
