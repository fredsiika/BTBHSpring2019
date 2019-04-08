import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from './shared/navbar'
import ListPage from './pages/List';
import MapPage from './pages/Map';
import HomePage from './pages/Home';
import FilterPage from './pages/Filter';
import StoryPage from './pages/Story';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {

  state = {
    categoryFilters: [],
    allRestaurants: []
  }

  handleCategories = (newArr) => {    
    this.setState({
      categoryFilters: newArr
    })
  }

  componentDidMount(){
    this.props.allStoriesQuery.refetch()
    .then((ret) => {
      this.setState({
        allRestaurants: ret.data.allRestaurants
      })
    });
  }

  render() {
    return (
        <Wrapper>
            <Router>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={() => <HomePage restaurants={this.state.allRestaurants}/>}/>
                <Route exact path="/list" component={() => <ListPage restaurants={this.state.allRestaurants}/>}/>
                <Route exact path="/map" component={MapPage} />
                <Route exact path="/filter" component={() => <FilterPage handleCategories={this.handleCategories} categoryFilters={this.categoryFilters}/>}/>
                <Route path="/story/:id" component={StoryPage} />
              </Switch>
          </Router>
        </Wrapper>
    );
  }
}

const GET_STORIES = gql`
  query {
     allRestaurants{
      name
      imageUrl
      amenities
      categories
      thumbsUpId{
        food
        service
        atmosphere
      }
     } 
  }
`;

const Wrapper = styled.div`
  margin-top: 40px;
  /* background-color: #FFFDFB; */
  background-color: #FAFAFA;
`;

const AppPageWithQuery = graphql(GET_STORIES, {
  name: 'allStoriesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(App)
export default AppPageWithQuery;
// export default App;
