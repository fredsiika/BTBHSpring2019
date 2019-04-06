import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  position: absolute;

  top: 30px;
  right: ${props => props.isFullscreen ? '30px' : 'calc(66vw + 30px)'};

  transition: right 1s;

  .icon {
    margin-top: 5px;
    margin-right: 2px;
    height: 20px;
    width: 20px;
    color: white;
    -webkit-transition: height 0.1s, width 0.1s, margin-top 0.1s, margin-right 0.1s;
    transition: height 0.1s, width 0.1s, margin-top 0.1s, margin-right 0.1s;
  }

  .circle {
    border-radius: 50%;
    height: 55px;
    width: 55px;
    background-color: #095cf0;
    border: none;
    box-shadow: 1px 5px 5px 1px #999999;
    -webkit-transition: margin-top 0.1s, margin-right 0.1s, height 0.1s, width 0.1s, box-shadow 0.1s; /* Safari */
    transition: margin-top 0.1s, margin-right 0.1s, height 0.1s, width 0.1s, box-shadow 0.1s;
  }

  .circle:active{
    .icon{
      height: 19px;
      width: 19px;
      margin-top: 7px;
      margin-right: -1px;

    }
    margin-top: 2px;
    margin-right: 2px;
    height: 52px;
    width: 52px;
    box-shadow: 1px 4px 4px 1px #333333; 
  }

  .circle:focus{
    outline: none;
  }

  .circle:hover{
    cursor: pointer;
  }
`;

class FilterIcon extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <button className="circle">
          <FontAwesomeIcon icon="filter" className="icon" />
          
        </button>
      </Wrapper>
    );
  }
}

export default FilterIcon;
