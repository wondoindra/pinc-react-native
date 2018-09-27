import React, { Component } from "react";
import { Button } from "react-native";
import { Container, Content, Card, CardItem, Text, Right } from "native-base";

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      modals: []
    };
  }

  addModal = async () => {
    await this.state.modals.push(this.state.index);
    await this.setState({ modals: this.state.modals });
    this.mapModal();
  };

  deleteModal = async index => {
    delete this.state.modals[index];
    await this.setState({ modals: this.state.modals });
    this.mapModal();
  };

  mapModal = async () => {
    const modals = await this.state.modals.map((list, index) => {
      return (
        <CardItem key={index}>
          <Text>Card {index + 1}</Text>
          <Right>
            <Button onPress={() => this.deleteModal(index)} title="Close" />
          </Right>
        </CardItem>
      );
    });
    await this.setState({ modals: modals });
  };

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.addModal} title="Add card" />
          <Card>{this.state.modals}</Card>
        </Content>
      </Container>
    );
  }
}
