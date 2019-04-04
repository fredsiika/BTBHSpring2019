import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter, faBars, faMap } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

import HomePage from './pages/Home.js'
import ListView from './pages/home/list';

library.add(faFilter, faBars, faMap);

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
              <Route exact path="/list" component={ListView} />
            </Switch>
          </Router>
        </Wrapper>
      </div>
    );
  }
}

export default App;
