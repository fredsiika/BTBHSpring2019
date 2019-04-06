import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
import SliderPage from "../shared/slider";

const Wrapper = styled.div`
  padding-bottom: 30px;

  .category-on {
    color: white;
    background-color: #f44336;

    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;

    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;

    border: 1px solid white;

    margin: 2px;
    display: inline-block;
  }

  .category-off {
    color: #f44336;
    background-color: white;

    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;

    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;

    border: 1px solid;

    margin: 2px;
    display: inline-block;
  }

  .category-container {
    padding-top: 15px;
  }

  .category {
    cursor: pointer;
  }

  .done {
    margin-top: 30px !important;
    margin-bottom: 15px !important;

    background-color: #f44336;
  }
`;

class FilterPage extends Component {
  state = {
    activeCategories: []
  };

  availableCategories = [
    "American",
    "Barbeque",
    "Chinese",
    "French",
    "Hamburger",
    "Indian",
    "Italian",
    "Japanese",
    "Mexican",
    "Pizza",
    "Seafood",
    "Steak",
    "Sushi",
    "Thai",
    "Korean",
    "Coffee",
    "Bakery",
    "Island",
    "Bar & Tapas",
    "Vegan",
    "Vegetarian",
    "Paleo",
    "Keto",
    "Gluten Free",
    "Halal",
    "Kosher",
    "Market"
  ];

  addCat = (cat) => {
    // var newList = this,.state
  }

  handleActiveCategoryUpdate = (cat) => {
    this.state.activeCategories.includes(cat) ?
      this.addCat(cat) 
      :
      this.removeCat(cat);
  }

  handleCategory = (category) => {
    if (this.state.activeCategories.includes(category)) {
      var newList = this.state.activeCategories;
      for (var i = 0; i < newList.length; i++) {
        if (newList[i] === category) {
          newList.splice(i, 1);
          i--;
        }
      }
      // this.props.handleCategories(this.state.activeCategories);
      this.setState({
        activeCategories: newList
      });
    } else {
      var newList2 = this.state.activeCategories;
      newList2.push(category);
      // this.props.handleCategories(this.state.activeCategories);
      this.setState({ activeCategories: newList2 });
    }
  };

  componentDidUpdate(){
    console.log("Filter: ", JSON.parse(JSON.stringify(this.availableCategories)));
  }

  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <SliderPage option0="$" option1="$$" option2="$$$" />
              <SliderPage option0="Fast" option1="Casual" option2="Fancy" />
              <SliderPage
                option0="1 Mile"
                option1="5 Miles"
                option2="10+ Miles"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" className="mt-5">
              {this.availableCategories.map((category, index) => {
                return (
                  <span
                    key={index}
                    className={
                      this.state.activeCategories.includes(category)
                        ? "category-on category"
                        : "category-off category"
                    }
                    onClick={() => {
                      this.handleCategory(category);
                    }}
                  >
                    {category}
                  </span>
                );
              })}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default FilterPage;
