import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Success from "./Success";
import Loading from "./Loading";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isSuccessful: false,
    isLoading: false
  };

  handleLogin = () => {
    console.log(this.state.email, this.state.password);

    this.setState({ isLoading: true });
  };

  tapBackground = () => {
    Keyboard.dismiss();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.tapBackground}>
        <Container>
          <Modal>
            <Image source={require("../assets/logo_3.png")} />
            <TextInput
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={this.handleLogin}>
              <Button>
                <Title>Sign In</Title>
              </Button>
            </TouchableOpacity>
            <Text>Forgot Password? Sign up</Text>
          </Modal>
          <Success isActive={this.state.isSuccessful} />
          <Loading isActive={this.state.isLoading} />
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default Login;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00d18b;
  align-items: center;
  justify-content: center;
`;

const TextInput = styled.TextInput`
  height: 50px;
  width: 150px;
  background-color: #39393b;
  border: 1px solid #979797;
  border-radius: 6px;
  font-size: 17px;
  margin-top: 20px;
  padding-left: 44px;
`;

const Text = styled.Text`
  margin-top: 20px;
  color: #ffffff;
  font-family: Helvetica;
  text-align: center;
  align-items: center;
  font-size: 17px;
`;

const Title = styled.Text`
  margin-top: 13px;
  color: #ffffff;
  font-family: Helvetica;
  text-align: center;
  font-size: 17px;
`;

const Button = styled.View`
  height: 50px;
  width: 150px;
  background-color: #026cff;
  border: 1px solid #979797;
  border-radius: 6px;
  font-size: 17px;
  margin-top: 20px;
`;

const Image = styled.Image`
  height: 150px;
  width: 150px;
  align-self: center;
`;

const Modal = styled.View`
  align-items: center;
`;
