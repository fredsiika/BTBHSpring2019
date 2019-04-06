import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import styled from 'styled-components';
import SliderPage from '../shared/slider';


const Wrapper = styled.div`

`;

class FilterPage extends Component{
    render(){
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <SliderPage/>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        );
    }
}

export default FilterPage;