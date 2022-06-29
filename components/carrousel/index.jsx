import React, { Component } from 'react'
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Carrousel extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  
  componentDidUpdate() {
    if(this.props.next) {this.next()};
    this.props.setNext(false);
    if(this.props.back) {this.previous()};
    this.props.setBack(false);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

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
        <Slider {...settings} ref={c => (this.slider = c)}>
          {this.props.images.map((each, index) => (
            <div key={index} className={this.props.imageContainer}>
              <Image src={`https:${each.fields.file.url}`} layout="fill"  alt="testimonies" priority/>
            </div>
          ))}
        </Slider>
        
      </>
    );
  }
}
