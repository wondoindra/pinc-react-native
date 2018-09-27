import React, { Component } from "react";
import { Button } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  CardItem,
  Text,
  Left,
  Body,
  Right
} from "native-base";

export default class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      page: 1
    };
  }

  getUsers = async URL => {
    await fetch(`https://reqres.in/api/users?${URL}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let members = data.data.map(list => {
          return (
            <ListItem avatar key={list.id}>
              <Left>
                <Thumbnail source={{ uri: `${list.avatar}` }} />
              </Left>
              <Body>
                <Text>
                  {list.first_name} {list.last_name}
                </Text>
              </Body>
            </ListItem>
          );
        });
        this.setState({ members: members });
      });
  };

  nextChange = async () => {
    const page = await this.state.page;
    await this.setState({ page: page + 1 });
    await this.getUsers(`page=${this.state.page}`);
  };

  prevChange = async () => {
    const page = await this.state.page;
    await this.setState({ page: page - 1 });
    await this.getUsers(`page=${this.state.page}`);
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <Container>
        <Content>
          <List>{this.state.members}</List>
          <CardItem>
            <Left>
              <Button onPress={this.prevChange} title="Previous" />
            </Left>
            <Right>
              <Button onPress={this.nextChange} title="Next" />
            </Right>
          </CardItem>
        </Content>
      </Container>
    );
  }
}
