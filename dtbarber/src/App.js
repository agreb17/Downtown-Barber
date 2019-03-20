import React, { Component } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import HomeView from "./Views/homepage";
import './App.css';

const AppContainer = styled.div`
width: ;
height: ;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      
        <AppContainer>
          <Route exact path="/" render={ <HomeView /> } />
        </AppContainer>
      
    );
  }
}

export default App;
