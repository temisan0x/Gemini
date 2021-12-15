import Slider from "react-slick";
import React, { Component } from "react";
import styled from "styled-components";



const names = [
    {
        "id":1,
        "name": "introducing the Gemini card"
    },
    {
        "id":2,
        "name": "engage with what you love doing"
    },
    {
        "id":3,
        "name": "appreciate your life bro"
    },
    {
        "id":4,
        "name": "success is not free"
    }
]

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
        className:"slides"
        };
        return (
            <div>
                <Slider {...settings}>
                    {names.map((name)=> {
                        return(
                            <div>
                                <li>{name.name}</li>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
        }
    }

