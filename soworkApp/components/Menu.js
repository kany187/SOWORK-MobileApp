import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 0
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  };

  handleMenu = index => {
    if (index == 0) {
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Avatar />
          <Text>John Doe</Text>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{ position: "absolute", top: 20, left: "8%" }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={50} color="#d3d3d3" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.handleMenu(index);
              }}
            >
              <MenuItem icon={item.icon} title={item.title} />
            </TouchableOpacity>
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
  position: absolute;
  /* background: white; */
  height: 200%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  /* border-width: 1px; */
  /* : "#00D18B"; */
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 250px;
  background: white;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: white;
  padding: 15px;
  border-top-width: 1px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: black;
  margin-top: 70;
  margin-left: 100px;
  /* position: absolute;
  top: 0;
  left: 150; */
`;

const Text = styled.Text`
  font-size: 20px;
  margin-top: 30px;
  text-align: center;
  font-family: Helvetica;
`;

const items = [
  {
    icon: "ios-card",
    title: "PAYMENT"
  },
  {
    icon: "ios-infinite",
    title: "HISTORY"
  },
  {
    icon: "ios-person",
    title: "PROFILE"
  },
  {
    icon: "ios-settings",
    title: "SETTINGS"
  },
  {
    icon: "ios-help-circle",
    title: "HELP"
  },
  {
    icon: "ios-log-in",
    title: "LOG OUT"
  }
];
