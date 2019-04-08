import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`

`;

class ProfilePage extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <div className="subRow">

                            </div>
                            <div className="subRow">

                            </div>
                            <div className="subRow">
                                <button></button>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <MDBRow>

                            </MDBRow>
                            <MDBRow>

                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        )
    }
}

export default ProfilePage;