import React, { Component } from "react";
import { Button } from "react-native";
import { Container, Content, Form, Item, Input, Toast } from "native-base";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      showToast: false,
      email: "",
      password: ""
    };
  }

  handleSubmit = async () => {
    const URL = "https://reqres.in/api/login";
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    await axios
      .post(URL, data)
      .then(response => {
        Toast.show({
          text: `${response.data.token}`,
          duration: 2000,
          type: "success"
        });
      })
      .catch(error => {
        Toast.show({
          text: `${error.response.data.error}`,
          duration: 2000,
          type: "danger"
        });
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                onChangeText={email => this.setState({ email })}
                textContentType="emailAddress"
                placeholder="Email"
              />
            </Item>
            <Item last>
              <Input
                onChangeText={password => this.setState({ password })}
                textContentType="password"
                placeholder="Password"
              />
            </Item>
          </Form>
          <Button onPress={this.handleSubmit} title="Sign In" />
        </Content>
      </Container>
    );
  }
}
