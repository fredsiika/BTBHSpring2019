import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 60px;

`;

class StoryPage extends Component {
    render() {
        return(
            <Wrapper>
            <p>THIS IS THE STORY PAGE</p>
            </Wrapper>
        )
    }
}

export default StoryPage;