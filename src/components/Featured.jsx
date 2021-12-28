import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NewYorkTimes from '../img/index.svg';
import Bloomberg from '../img/bloom.svg';
import WallStreetJournal from '../img/wall-street.svg';
import Fortune from '../img/fortune.svg';
import Wired from '../img/wired.svg';
import Forbes from '../img/forbes.svg'


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
    photo:Forbes,
},
{
    id:5,
    photo:Fortune,
},
{
    id:6,
    photo:Wired,
}
]

const FeaturedSection = styled.div `
    display: flex;
    justify-content:space-evenly;
    align-items:center; 
    padding-top: 45px;


    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`

const FeaturedIn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    img {
        width:150px;
    }

    @media screen and (max-width:900px) {
            align-items:center;  
            margin-top: 22px;
        }
`
const More = styled.div`
    display: flex;
    justify-content: end;
    font-size: 14px;
    padding-bottom: 40px;
    padding-top: 10px;
    margin: 4px 18px 8px 0px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;

    a {
        text-decoration:none;
        color: rgb(103, 104, 104);
    }

    @media screen and (max-width:900px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

function Featured() {
    return (
        <>
        <FeaturedSection>
            {features.map((feature) => (
            <FeaturedIn>
                <img src={feature.photo} alt="logo" />         
                </FeaturedIn>
            ))}
        </FeaturedSection>
        <More>
            <Link to="/coverage">    
                View all coverage
            </Link>
        </More>
        </>
    )
}

export default Featured
