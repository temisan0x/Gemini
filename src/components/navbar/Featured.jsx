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
    
`


function Featured() {
    return (
        <FeaturedSection>
        {features.map((feature) => (
            <img src={feature.photo} alt="logo" />
        ))}
        </FeaturedSection>
    )
}

export default Featured
