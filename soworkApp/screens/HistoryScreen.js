import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

class HistoryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text> Recent services</Text>
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
        <Text_2>No recent services</Text_2>
      </Container>
    );
  }
}

export default HistoryScreen;

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

const Bar = styled.View``;

const View_1 = styled.View`
  border-color: #d3d3d370;
  border-width: 1px;
  margin: 1px;
  width: 100%;
  position: absolute;
  top: 100px;
`;

const Text_2 = styled.Text`
  font-family: Helvetica;
`;
