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

const Featured = styled.div `

`


function Featured() {
    return (
        <Featured>
        {features.map((feature) => (
            <img src={feature.photo} alt="logo" />
        ))}
        </Featured>
    )
}

export default Featured
