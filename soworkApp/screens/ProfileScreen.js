import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <Container>
        <Text>Current Location</Text>
        <Bar></Bar>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 35,
            left: 20
          }}
        >
          <CloseView>
            <Ionicons name="ios-arrow-back" size={30} />
          </CloseView>
        </TouchableOpacity>
        <Title>Estimated Lawn Size</Title>
        <Title_1>1,000 - 5,000 sq ft</Title_1>
        <Bar_1></Bar_1>
        <Title_2>SMALL</Title_2>
        <Title_3>MEDIUM</Title_3>
        <Title_4>LARGE</Title_4>
        <Title_5>XL</Title_5>
        <TitleBar>
          <Text_2>Standard (under 6 inches)</Text_2>
        </TitleBar>
        <IconPhoto>
          <Ionicons name="ios-camera" size={30} />
        </IconPhoto>
        <TitleBar_2>
          <Text_3>Tall grass (6 to 12 inches)</Text_3>
        </TitleBar_2>
        <NextView>
          <Ionicons name="ios-arrow-forward" size={30} color="#ffffff" />
        </NextView>
      </Container>
    );
  }
}

export default ProfileScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 17px;
  position: absolute;
  top: 80px;
  left: 100px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const Bar = styled.View`
  border-color: #d3d3d370;
  border-width: 2px;
  margin: 1px;
  width: 50%;
  position: absolute;
  top: 103;
  left: 90;
`;

const Title = styled.Text`
  font-size: 17px;
  margin: 10px;
  position: absolute;
  top: 180;
`;

const Title_1 = styled.Text`
  font-size: 15px;
  padding-bottom: 90px;
  position: absolute;
  top: 220;
`;

const Bar_1 = styled.View`
  border-color: #00d18b;
  border-width: 2px;
  margin: 1px;
  width: 20%;
  position: absolute;
  top: 290;
  left: 120;
`;

const Title_2 = styled.Text`
  font-size: 17px;
  position: absolute;
  top: 300;
  left: 26;
`;

const Title_3 = styled.Text`
  font-size: 17px;
  position: absolute;
  top: 300;
  left: 120;
`;

const Title_4 = styled.Text`
  font-size: 17px;
  position: absolute;
  top: 300;
  left: 210;
`;

const Title_5 = styled.Text`
  font-size: 17px;
  position: absolute;
  top: 300;
  left: 315;
`;

const TitleBar = styled.View`
  background-color: #00d18b;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
  align-items: center;
  position: absolute;
  top: 350px;
  left: 50px;
`;

const Text_2 = styled.Text`
  font-size: 17px;
  margin: 30px;
`;

const Text_3 = styled.Text`
  font-size: 17px;
  margin: 32px;
`;

const TitleBar_2 = styled.View`
  background-color: #d3d3d3;
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  align-items: center;
  position: absolute;
  top: 450px;
  left: 50px;
  z-index: 1;
`;

const NextView = styled.View`
  width: 45px;
  height: 45px;
  background-color: #026cff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 600;
  left: 300;
`;

const IconPhoto = styled.View`
  position: absolute;
  top: 375px;
  left: 290px;
`;
