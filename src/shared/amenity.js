import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`

  .amenity {
    height: 30px !important;
    width: 30px !important;
    margin-right: 5px;
    padding: 4px;
    border-radius: 50%;

    color: white;

    font-weight: bold;
    text-align: center;
    display: inline-block;
  }

  .icon {
    position: relative;
    top: -3px;
    left: -1px;
  }
`;

class Amenity extends Component {
  state = {
    icon: "",
    color: "",
    plus: false
  };

  componentDidMount = () => {
    console.log(this.props.name);
    var icon, color, plus;
    switch (this.props.name) {
      case "vegetarian":
        icon = "leaf";
        color = "green";
        break;

      case "vegan":
        icon = "leaf";
        plus = true;
        color = "green";
        break;

      case "hiring":
        icon = "suitcase";
        color = "blue";
        break;

      case "keto":
        icon = "bacon";
        color = "brown";
        break;

      case "wifi":
        icon = "wifi";
        color = "blue";
        break;
    }
    this.setState({
        icon: icon,
        color: color,
        plus: plus
      });
  };

  render() {
    return (
      // <Wrapper>
        <h5 className={"amenity " + this.state.color}>
          <MDBIcon icon={this.state.icon} className="icon fa-xs">
            {this.state.plus === true ? "+" : ""}
          </MDBIcon>
        </h5>
      // </Wrapper>
    );
  }
}

export default Amenity;
