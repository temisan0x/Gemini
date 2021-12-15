import React from 'react';
import styled from 'styled-components';
import NewYorkTimes from '../../img/index.svg';
import Bloomberg from '../../img/bloom.svg';
import WallStreetJournal from '../../img/wall-street.svg';
import Fortune from '../../img/fortune.svg';
import Wired from '../../img/wired.svg'

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
        height:32px;
    }
`

const FeaturedIn = styled.div`
    padding: 20px 10px;
    flex: 0 1 auto;
    width: 100%;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
`


function Featured() {
    return (
        <FeaturedSection>
            <FeaturedIn>
            {features.map((feature) => (
                <img src={feature.photo} alt="logo" />
            ))}
            </FeaturedIn>
        </FeaturedSection>
    )
}

export default Featured
