import {FaBars} from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav `
    padding:0.2rem calc((100vw - 1000px)/2);
    width:100%;
    height:65px;
    border-bottom: 1px solid #f1f1f1;
    z-index:2;
    position:relative;
    display:flex;
    justify-content:space-between;

    .logo {
        padding:15px 0;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    list-style:none;
    flex-flow:row nowrap;
    @media screen and (max-width:768px) {
        flex-flow:column nowrap;
        position:fixed;
        z-index:-1;
        right:0;
        top:0;
        height:100vh;
        width:500px;
        padding-top:3.5rem;
        display:block;
        margin-block-start: 1em;
        margin-block-end: 1em;
    }

    li {
        padding:18px 10px;
        line-height:28px;
        font-size:18px;
        font-weight:600px;
    }

    hr{
        display:none;
    }

    @media screen and (max-width:768px) {

        p {
            display:block;
            margin-block-start: 1em;
            margin-block-end: 1em;
        }

        li {
            position: relative;
            color: rgb(1, 3, 4);
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            border-bottom: 0.5px solid grey;
        }
    }
`

export const NavBar = styled.ul `
    display:flex;
    list-style:none;
    flex-flow:row nowrap;

    li {
        padding:18px 10px;
        line-height: 28px;
        font-size: 18px;
        color: rgb(1, 3, 4);
    }
`
export const Bars = styled(FaBars) `
    display:none;
    color:#fff;
    @media screen and (max-width:768px) {
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 75%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

// export const NavLink = styled(Link)`
//     color:#fff;
//     display:flex;
//     align-items: center;
//     text-decoration:none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor:pointer;
// `;

// export const NavBtn = styled.nav `
//     display:flex;
//     align-items:end;
//     margin-right: 24px;
//     color:white;
//     @media screen and (max-width:768px) { 
//         display:none;
//     }
// `

// export const NavBtnLink = styled(Link)`
//     border-radius:4px;
//     background:#fff;
//     padding:10px 22px;
//     color:#000000;
//     outline:none;
//     border:none;
//     cursor:pointer;
//     transition:all 0.2s ease-in-out;
//     text-decoration:none;
//     margin-left:24px;
//     &:hover {
//         transition:all 0.2s ease-in-out;;
//         background:black;
//         color:#000000;
//     }
// `