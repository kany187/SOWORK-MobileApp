import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

class ServiceScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Upcoming services</Text>
        <View_1></View_1>
        <Bar>
          <Ionicons
            name="ios-menu"
            size={30}
            style={{
              position: "absolute",
              left: -175,
              top: -265,
              overflow: "hidden"
            }}
          />
        </Bar>
        <Title_1>Today</Title_1>
        <Title_2>This week</Title_2>
        <Title_3>This month</Title_3>
        <View_2></View_2>
        <View_3></View_3>
        <View_4></View_4>
        <Text_2>No upcoming service for this week</Text_2>
      </Container>
    );
  }
}

export default ServiceScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-family: Helvetica;
  position: absolute;
  top: 50;
  font-size: 17px;
`;

const View_1 = styled.View`
  border-color: #d3d3d370;
  border-width: 1px;
  margin: 1px;
  width: 100%;
  position: absolute;
  top: 100px;
`;

const Bar = styled.View`
  border-top-width: 1px;
  border-radius: 20px;
  background-color: black;
`;

const Title_1 = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  position: absolute;
  top: 120;
  left: 36;
`;

const Title_2 = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  position: absolute;
  top: 120;
  left: 136;
`;

const Title_3 = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  position: absolute;
  top: 120;
  left: 266;
`;

const View_2 = styled.View`
  border-color: #d3d3d370;
  color: #d3d3d370;
  border-width: 2px;
  margin: 1px;
  width: 15%;
  position: absolute;
  top: 140;
  left: 36;
`;

const View_3 = styled.View`
  border-color: #00d18b;
  border-width: 2px;
  margin: 1px;
  width: 20%;
  position: absolute;
  top: 140;
  left: 136;
`;

const View_4 = styled.View`
  border-color: #d3d3d370;
  border-width: 2px;
  margin: 1px;
  width: 20%;
  position: absolute;
  top: 140;
  left: 266;
`;

const Text_2 = styled.Text`
  font-family: Helvetica;
`;
