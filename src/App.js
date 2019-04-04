import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './pages/Home.js'
const Wrapper = styled.div`
  
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/list" component={HomePage} />
            </Switch>
          </Router>
        </Wrapper>
      </div>
    );
  }
}

export default App;
