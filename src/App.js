import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter, faBars, faMap } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

import Navbar from './shared/navbar'
import ListPage from './pages/List';
import MapPage from './pages/Map';
import HomePage from './pages/Home';
import FilterPage from './pages/Filter';

library.add(faFilter, faBars, faMap);

const Wrapper = styled.div`

`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path="/list" component={ListPage} />
              <Route exact path="/map" component={MapPage} />
              <Route exact path="/filter" component={FilterPage} />
            </Switch>
          </Router>
        </Wrapper>
      </div>
    );
  }
}

export default App;
