import React, { Component } from 'react'
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Carrousel extends Component {

  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 570,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
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
