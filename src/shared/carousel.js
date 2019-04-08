import React, { Component } from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const flickityOptions = {
  initialIndex: 0
};

const Wrapper = styled.div`

  overflow-x: hidden;

  img {
    height: auto;
    width: 100%;
  }

`;

class Carousel extends Component {
  flickityOptions = {
    initialIndex: 8,
    cellSelector: ".sliderBoxes",
    wrapAround: true,
    disableImagesLoaded: true,
    freeScroll: true,
  fullscreen: true,
  prevNextButtons: false


  };

  componentDidMount = () => {
    // You can register events in componentDidMount hook
    this.flkty.on("settle", () => {
      console.log(`current index is ${this.flkty.selectedIndex}`);
    });
  };

  myCustomNext = () => {
    // You can use Flickity API
    this.flkty.next();
  };
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <Flickity
                options={flickityOptions} // takes flickity options {}
                flickityRef={c => (this.flkty = c)}
              >
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681" />
              </Flickity>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default Carousel;
