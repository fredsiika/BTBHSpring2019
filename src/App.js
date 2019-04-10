import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from './shared/navbar'
import ListPage from './pages/List';
import MapPage from './pages/Map';
import HomePage from './pages/Home';
import StoryPage from './pages/Story';
import ProfilePage from './pages/Profile'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import LeaveReview from './shared/leave-review';

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
    console.log('updated');
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
                <Route exact path="/story/:id" component={StoryPage} />
                <Route exact path="/profile" component={() => <ProfilePage restaurants={this.state.allRestaurants}/>}/>
                <Route exact path="/review" component={LeaveReview} />
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
      thumbsUpId {
        food
        service
        atmosphere
      }
      amenitiesList {
        name
        color
        extraSymbol
      }
     } 
  }
`;

const Wrapper = styled.div`
  margin-top: 40px;
  /* background-color: #FFFDFB; */
  background-color: white;
`;

const AppPageWithQuery = graphql(GET_STORIES, {
  name: 'allStoriesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(App)
export default AppPageWithQuery;
