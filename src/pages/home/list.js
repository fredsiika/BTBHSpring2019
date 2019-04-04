import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 67vw;
    background-color: beige;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -9999;
`;

class ListView extends Component {
    render() {
        return(
            <Wrapper>
                <div className="card-container">
                    <div className="image-container">
                        <img className="main-image" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                    </div>
                </div>
                <hr />
            </Wrapper>
        );
    }
}

export default ListView;