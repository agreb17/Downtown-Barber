import React from "react";
import Navbar from "";
import Schedules from "";
import About from "";
import styled from "styled-components";
import dtbimg from "../assets/DTBpic.jpg";

const HomeViewContainer = styled.div`
width: 100%;
height: 100%vh;
background: url(${dtbimg});
`;

const HomeView = props => {
      return (
        <HomeViewContainer>
          <Navbar/>
          <Schedules/>
          <About/>
        </HomeViewContainer>

            
        
      );
    }
  
  
  export default HomeView;