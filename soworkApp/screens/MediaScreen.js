import React from "react";
import styled from "styled-components";

class MediaScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text> Media Screen</Text>
      </Container>
    );
  }
}

export default MediaScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
