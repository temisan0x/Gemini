import React from 'react';
import styled from 'styled-components';
import NewYorkTimes from '../img/index.svg';
import Bloomberg from '../img/bloom.svg';
import WallStreetJournal from '../img/wall-street.svg';
import Fortune from '../img/fortune.svg';
import Wired from '../img/wired.svg'

const features = [{
    id:1,
    photo: NewYorkTimes,
},
{
    id:2,
    photo: Bloomberg,
},
{
    id:3,
    photo: WallStreetJournal,
},
{
    id:4,
    photo:Fortune,
},
{
    id:5,
    photo:Wired
}
]

const FeaturedSection = styled.div `
    display: flex;
    justify-content:space-evenly;
    padding-top: 40px;
    padding-bottom: 42px;

    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`

const FeaturedIn = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width:200px;
    }

    @media screen and (max-width:900px) {
            align-items:center;  
            margin-top: 42px;
        }
`


function Featured() {
    return (
        <FeaturedSection>
            {features.map((feature) => (
            <FeaturedIn>
                <img src={feature.photo} alt="logo" />         
                </FeaturedIn>
            ))}
        </FeaturedSection>
    )
}

export default Featured
