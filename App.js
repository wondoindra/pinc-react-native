import React from "react";
import { Container, Header, Tab, Tabs, Root } from "native-base";
import Login from "./components/pages/B";
import Members from "./components/pages/C";
import Modal from "./components/pages/A";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Tabs>
          <Tab heading="Test A">
            <Modal />
          </Tab>
          <Tab heading="Test B">
            <Root>
              <Login />
            </Root>
          </Tab>
          <Tab heading="Test C">
            <Members />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
