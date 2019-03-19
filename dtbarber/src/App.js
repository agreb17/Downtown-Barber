import React, { Component } from 'react';
import styled from "styled-components";
import { Route } from "react-router-dom";
import HomeView from "";
import './App.css';

const AppContainer = styled.div`
width: ;
height: ;
`;

class App extends Component {
  render() {
    return (
      
        <AppContainer>
          <Route exact path="/" render={props => <HomeView {...props} />} />
        </AppContainer>
      
    );
  }
}

export default App;
