import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = props => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={32} color="#000000" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
`;

const Content = styled.View`
  padding-left: 15px;
`;

const Title = styled.Text`
  font-size: 15px;
  margin-top: 7px;
  font-family: Helvetica;
`;
