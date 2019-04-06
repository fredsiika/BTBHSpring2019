import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
import SliderPage from "../shared/slider";

const Wrapper = styled.div`
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

    border: 1px solid #f44336;

    margin: 2px;
    display: inline-block;
  }

  .category-container {
    padding-top: 15px;
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
    "Thai"
  ];

  handleCategory = category => {
    if (this.state.activeCategories.includes(category)) {
      var newList = this.state.activeCategories;
      for (var i = 0; i < newList.length; i++) {
        newList.splice(i, 1);
        i--;
      }
      this.setState({
        activeCategories: newList
      });
    } 
    else 
    {
      var newList = this.state.activeCategories;
      newList.push(category);
      this.setState({ activeCategories: newList });
    }
  };

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
              {this.availableCategories.map(category => {
                return (
                  <span
                    className={
                      this.state.activeCategories.includes(category)
                        ? "category-on"
                        : "category-off"
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
