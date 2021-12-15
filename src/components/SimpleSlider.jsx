import Slider from "react-slick";
import React, { Component } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div `
    background-color:inherit;
    color: #fff;
    font-size: 14px;
    line-height: 50px;
    width:100%;
    margin: 3px;
    position: relative;

    .slick-arrow.slick-prev {
        background-color: grey;
        border-radius: 50%;
    }

    .slick-arrow.slick-next {
        background-color: grey;
        border-radius: 50%;
    }

    div {
        display:flex;
    }

    .color1 {
        background-color: rgb(26, 28, 29);
    }


    .color2 {
        background-color: rgb(20, 55, 63);
    }

    .color3 {
        background-color: rgb(32, 0, 0);
    }

    .color4 {
        background-color: rgb(26, 26, 26);
    }
`

export default class SimpleSlider extends Component {
    render() {
        const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        };
        return (
            <SliderWrapper>
                <Slider {...settings}>
                    <div className="color1">
                        <h3>1</h3>
                    </div>
                    <div className="color2">
                        <h3>2</h3>
                    </div>
                    <div className="color3">
                        <h3>3</h3>
                    </div>
                    <div className="color4">
                        <h3>4</h3>
                    </div>
                    <div className="color5">
                        <h3>5</h3>
                    </div>
                </Slider>
            </SliderWrapper>
        );
        }
    }

