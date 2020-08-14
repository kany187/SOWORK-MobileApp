import React from "react";
import { TouchableOpacity, Animated, Easing, StatusBar } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Map from "./Map";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.9
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <TitleBar_1>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push("Request");
              }}
            >
              <Text_1>Summer</Text_1>
            </TouchableOpacity>
          </TitleBar_1>
          <TitleBar_2>
            <Text_2>Winter</Text_2>
          </TitleBar_2>
          <Content>
            <Map />
          </Content>
          <TouchableOpacity
            onPress={this.props.openMenu}
            style={{
              position: "absolute",
              top: 5,
              left: 5
            }}
          >
            <OpenView>
              <Ionicons
                name="ios-menu"
                size={40}
                style={{
                  position: "absolute",
                  left: 20,
                  top: 20,
                  overflow: "hidden"
                }}
              />
            </OpenView>
          </TouchableOpacity>
          <View>
            <Title>
              Some people in your area are free to cut your grass Order your
              service now !
            </Title>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.push("Section");
            }}
          >
            <Service>
              <Ionicons name="ios-add-circle" size={75} />
            </Service>
          </TouchableOpacity>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

// const Title = styled.Text`
//   margin-top: 13px;
//   color: #b8bece;
//   font-family: Helvetica;
//   text-align: center;
//   font-size: 17px;
// `;

const RootView = styled.View`
  flex: 1;
`;

const Text_1 = styled.Text`
  margin: 10px;
  font-size: 17px;
  text-align: center;
  align-items: center;
  font-weight: bold;
`;

const Text_2 = styled.Text`
  font-size: 17px;
  margin: 10px;
  text-align: center;
  align-items: center;
  color: white;
`;

const TitleBar_1 = styled.View`
  background-color: #d3d3d3;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 100px;
  left: 90px;
  z-index: 1;
`;

const TitleBar_2 = styled.View`
  background-color: #d3d3d370;
  border-radius: 10px;
  padding-right: 10px;
  padding-left: 10px;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 90px;
  overflow: hidden;
  z-index: 1;
`;

const Content = styled.View`
  position: absolute;
  background: white;
  bottom: 0px;
  height: 600px;
  width: 600px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 12.5px;
  font-family: Helvetica;
`;

const View = styled.View`
  border-radius: 55px;
  border-width: 0.5px;
  background-color: white;
  position: absolute;
  bottom: 40px;
  margin: 20px;
  padding: 20px;
`;

const Service = styled.View`
  position: absolute;
  bottom: -320px;
  left: -25px;
`;

const OpenView = styled.View`
  width: 44px;
  height: 44px;
`;
