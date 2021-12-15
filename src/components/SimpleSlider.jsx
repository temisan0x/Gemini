import Slider from "react-slick";
import React, { Component } from "react";

const names = [
    {
        name: "introducing the Gemini card"
    },
    {
        name: "introducing the Gemini card"
    },
    {
        name: "introducing the Gemini card"
    },
    {
        name: "introducing the Gemini card"
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
                            <li>{name}</li>
                        </div>
                    )
                })}
            </Slider>
            </div>
        );
        }
    }

