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

    .slick-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-text {
        margin-left:20px;
    }

    img{
        width:24px;
        display:block;
        cursor:pointer;
    }
`

export default class SimpleSlider extends Component {
    render() {
        const settings = {
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
                        <div className="slick-flex"><img src="https://images.ctfassets.net/jg6lo9a2ukvr/yiWuKktCSLvvgUnx0fZVA/9e29e63c1fbaa5d595f69aca363321ff/Cryptopedia_Homepage_Icon.svg?fm=webp" alt="logo" />
                        <p className="slide-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div className="color2">
                        <div className="slick-flex"><img src="https://images.ctfassets.net/jg6lo9a2ukvr/bxJjuhCjBxHsnCQCXjdVp/2a0b014d1ca9e4df8662c6486d479b16/Gemini_Earn_Icon.svg?fm=webp" alt="logo" />
                        <p className="slide-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div className="color3">
                        <div className="slick-flex"><img src="https://images.ctfassets.net/jg6lo9a2ukvr/6Ms3LOjZTnJ13Kse2Z8lBO/4f82519a586b922e39f785cca7bbfe05/Subtract.svg?fm=webp" alt="logo" />
                        <p className="slide-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div className="color4">
                        <div className="slick-flex"><img src="https://images.ctfassets.net/jg6lo9a2ukvr/1D7Gxq3hAUdV4dIYlw0TWM/943312b8b271f4b2dcb9c78158f63ed3/Creditcard.svg?fm=webp" alt="logo" />
                        <p className="slide-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                </Slider>
            </SliderWrapper>
        );
        }
    }

