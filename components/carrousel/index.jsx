import React, { Component } from 'react'
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Carrousel extends Component {

  render() {
    const settings = {
        dots: this.props.dots,
        infinite: true,
        slidesToShow: this.props.DefaultSlidesToShow,
        slidesToScroll: 1,
        autoplay: this.props.autoplay,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: this.props.carrouselResponsiveSettings
    };

    return (
      <>
        <Slider {...settings}>
          {this.props.images.map((each, index) => (
            <div key={index} className={this.props.imageContainer}>
              <Image src={`https:${each.fields.file.url}`} layout="fill"  />
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
