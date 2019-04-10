import React, { Component } from "react";
import styled from "styled-components";
import Flickity from "react-flickity-component";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const flickityOptions = {
  initialIndex: 1
};

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 150px;
  width: 100%;
  margin-bottom: 15px;

  img {
    height: 150px;
    width : 150px;
    margin: 0px 2px;
    object-fit: cover;
  }

  img:first-child{
    margin-left: 35px;
  }

  .slider-boxes{
    border-radius: 5px;
    background-color: red;
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
  }

  .carousel:focus{
    outline: none;
  }

`;

class Carousel extends Component {
  flickityOptions = {
    initialIndex: 8,
    cellSelector: ".sliderBoxes",
    wrapAround: true,
    disableImagesLoaded: true,
    freeScroll: false,
    fullscreen: true,
    prevNextButtons: true,
    container: true,
  };

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
                <img alt="carousel" src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/3607952/20150408-Burger_Joint_3-1.0.jpg" />
                <img alt="carousel" src="https://2o7fsh4anuayrnrhe3us6v71-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/The-Secret-Burger-Joint-in-the-Parker-Meridien-Hotel.jpg" />
                <img alt="carousel" src="https://irp-cdn.multiscreensite.com/b6050b0d/import/base/burgerandfries.jpg" />
                <img alt="carousel" src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/3607952/20150408-Burger_Joint_3-1.0.jpg" />
                <img alt="carousel" src="https://2o7fsh4anuayrnrhe3us6v71-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/The-Secret-Burger-Joint-in-the-Parker-Meridien-Hotel.jpg" />
                <img alt="carousel" src="https://irp-cdn.multiscreensite.com/b6050b0d/import/base/burgerandfries.jpg" />
                <img alt="carousel" src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/3607952/20150408-Burger_Joint_3-1.0.jpg" />
                <img alt="carousel" src="https://2o7fsh4anuayrnrhe3us6v71-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/The-Secret-Burger-Joint-in-the-Parker-Meridien-Hotel.jpg" />
                <img alt="carousel" src="https://irp-cdn.multiscreensite.com/b6050b0d/import/base/burgerandfries.jpg" />
                <img alt="carousel" src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/3607952/20150408-Burger_Joint_3-1.0.jpg" />
                <img alt="carousel" src="https://2o7fsh4anuayrnrhe3us6v71-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/The-Secret-Burger-Joint-in-the-Parker-Meridien-Hotel.jpg" />
                <img alt="carousel" src="https://irp-cdn.multiscreensite.com/b6050b0d/import/base/burgerandfries.jpg" />
              </Flickity>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default Carousel;
