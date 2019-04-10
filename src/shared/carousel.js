import React, { Component } from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const flickityOptions = {
  initialIndex: 1
};

const Wrapper = styled.div`
  overflow-x: hidden;
  height: 150px;
  margin-bottom: 15px;

  img {
    height: auto;
    width: 100%;
  }

  .flickity-page-dots{
    display: none;
  }

  .flickity-button{
    /* display: none; */
    visibility: hidden;
  }

  .carousel{
    width: 80%;
  }

  .carousel:hover{
    cursor: grab;
  }

  .carousel:active{
    cursor: grabbing;
    background-color: red;
    overflow-y: hidden;
  }

  .carousel:focus{
    outline: none;
  }

  .carousel-image{
    border-radius: 3px;
    margin-left: -15px;
    padding-left: 0px;
    margin-right: 5px;
    height: 100%;
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
    prevNextButtons: true,
    container: true,
  };

  // componentDidMount = () => {
  //   // You can register events in componentDidMount hook
  //   this.flkty.on("settle", () => {
  //     console.log(`current index is ${this.flkty.selectedIndex}`);
  //   });
  // };

  // myCustomNext = () => {
  //   // You can use Flickity API
  //   this.flkty.next();
  // };
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
              >
              <MDBCol className="carousel-image" size='12'>
              <img   src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/3607952/20150408-Burger_Joint_3-1.0.jpg" />
              </MDBCol>
              <MDBCol className="carousel-image" size='12'>
              <img  src="https://2o7fsh4anuayrnrhe3us6v71-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/The-Secret-Burger-Joint-in-the-Parker-Meridien-Hotel.jpg" />
              </MDBCol>
              <MDBCol className="carousel-image" size='12'>
              <img  src="https://irp-cdn.multiscreensite.com/b6050b0d/import/base/burgerandfries.jpg" />
              </MDBCol>
              </Flickity>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default Carousel;
