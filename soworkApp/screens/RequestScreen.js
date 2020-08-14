import React from "react";
import styled from "styled-components";

class RequestScreen extends React.Component {
  render() {
    // const { navigation } = this.props;
    // const section = navigation.getParam("section");
    return (
      <Container>
        <Text>Request Screen</Text>
      </Container>
    );
  }
}

export default RequestScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
