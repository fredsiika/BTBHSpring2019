import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from './shared/navbar'
import ListPage from './pages/List';
import MapPage from './pages/Map';
import HomePage from './pages/Home';
import FilterPage from './pages/Filter';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const seedData = [
  {
    url: "https://resizer.otstatic.com/v2/photos/huge/24165521.jpg",
    thumbs: 831,
    name: "Joe's Bar & Grill"
  },
  {
    url: "https://assets3.thrillist.com/v1/image/2785413/size/gn-gift_guide_variable_c.jpg",
    thumbs: 739,
    name: "El Limoncito"
  },
  {
    url: "https://media.timeout.com/images/103820800/630/472/image.jpg",
    thumbs: 612,
    name: "Best Halal"
  },
  {
    url: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/roast-turkey-pho-ck.jpg?itok=Vf6k6W0d",
    thumbs: 417,
    name: "Pho 64"
  },
  {
    url: "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
    thumbs: 368,
    name: "China Express"
  },
]

class App extends Component {

  state = {
    categoryFilters: []
  }

  handleCategories = (newArr) => {    
    this.setState({
      categoryFilters: newArr
    })
  }

  componentDidMount(){
    this.props.allStoriesQuery.refetch()
    .then((ret) => {
      console.log(ret);
    });
  }

  componentDidUpdate() {
    // console.log("App: ",this.state.categoryFilters);
  }

  render() {
    return (
        <Wrapper>
            <Router>
              <Navbar/>
              <Switch>
                <Route exact path="/" component={() => <HomePage seedData={seedData}/>}/>
                <Route exact path="/list" component={ListPage}/>
                <Route exact path="/map" component={MapPage} />
                <Route exact path="/filter" component={() => <FilterPage handleCategories={this.handleCategories} categoryFilters={this.categoryFilters}/>}/>
              </Switch>
          </Router>
        </Wrapper>
    );
  }
}

const GET_STORIES = gql`
  query {
     allStories{
      title
      subtitle
      id
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
