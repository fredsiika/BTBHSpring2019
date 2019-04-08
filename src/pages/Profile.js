import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`

    margin-top: 60px;

    .info {
        height: 350px;
        border: 2px solid green;
    }

    .subRow {
        display: block;
        border: 1px solid black;
    }

    .image {
        height: 250px;
    }

    .column {
        padding: 0;
    }

    button {
        display: block;
        border: none;
        background-color: rgba(0,0,0,0);
        color: red;
        margin: auto;
    }

    p {
        margin: 0;
        padding: 0;
        color: black;
        font-weight: 400;
        text-align: center;
    }
`;

class ProfilePage extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow className="info">
                        <MDBCol className="column">
                            <div className="subRow image">
                            </div>
                            <div className="subRow">
                                <p>Status</p>
                            </div>
                            <div className="subRow">
                                <button>Delete Account</button>
                            </div>
                        </MDBCol>
                        <MDBCol className="column">
                            <div className="subRow">
                            </div>
                            <div className="subRow">
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        )
    }
}

export default ProfilePage;