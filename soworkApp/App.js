import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigators/AppNavigator";

const initialState = {
  action: "",
  name: ""
};

const reducer = (state = initialState, action) => {
  if (action.type == "CLOSE_MENU") {
    return { action: "closeMenu" };
  } else if (action.type == "OPEN_MENU") {
    return { action: "openMenu" };
  }

  return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
