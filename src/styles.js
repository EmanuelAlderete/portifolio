import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { flipInY, bounce, flash } from 'react-animations';
import { Link } from "react-scroll";

import oceanImg from './images/ocean.jpg';

const flixInXAnimation = keyframes`${flipInY}`;
const bounceAnimation = keyframes`${bounce}`;
const flashAnimation = keyframes`${flash};`

export const ResetCSS = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Roboto Mono', monospace;
    }
`;

export const HomeSection = styled.section`
    height: 100vh;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) ), url("https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
    background-size: cover;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10%;
    flex-wrap: wrap;

    div {
        min-width: 100%;
        display: inline;
        
    }

    h1 {
        letter-spacing: 2px;
        font-weight: lighter;
        font-size: 2em;
        display: block;
    }

    p {
        font-size: 1.5em;
        font-weight: lighter;
        display: block;
    }
`;

export const FundationsSection = styled.section`
    height: 95vh;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: center;

    div.main { 
        flex: 1 1 50%; 
        padding: 20px; 
    }

    div.icons { 
        display: flex; 
        align-items: center; 
        margin: 10px 0; 
    }

    div.icons div {
        margin-left: 10px;
    }

    div.icons  p {
        font-size: .8em;
    }

    img { 
        width: 100px; 
    }

    div.icons:hover > img { 
        animation: 1.3s ${flixInXAnimation}; 
    }

    h1 { 
        font-size: 3em; 
    }

    h4 {
        font-weight: bold;
    }

    div.buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 300px){
        div.main {
            min-width: 300px;
        }
    }

    @media (max-width: 300px) {
        div.main {
            min-width: 200px;
        }
    }
`;

export const StyledLink = styled(Link)`
    box-sizing: border-box;
    text-decoration: none;
    background: #000;
    color: #FFF;
    width:50%;
    font-size: 20px;
    padding: 10px;
    display: inline-block;
    margin-top: 15px;
    text-align: center;
    transition: all .3s;
    position: relative;

    :hover {
        box-sizing: border-box;
        padding: 9px;
        background: #FFF;
        border: 1px solid #000;
        color: #000;
    }
`;

export const BounceArrow = styled(Link)`
    animation: 2s ${bounceAnimation};
    animation-iteration-count:infinite;
    cursor: pointer;
    bottom: 0;
    position: absolute;

    img {
        height: 50px;
    }
`;

export const TechsSection = styled.section`
    height: 95vh;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex-flow: row wrap;

    div.main {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
        flex: 1 1 50%;
    }

    div.title {
        min-width: 250px;
        background-image: url(${oceanImg});
        color: #FFF;
        color: #FFFFFF;
        text-shadow: 8px 8px 4px #474747;
    }

    div.title:hover > h1 {
        animation: 3s ${flashAnimation};
    }

    div.icons {
        display: flex;
        align-items: center;
        height: 150px;
        padding: 30px;
    }

    div.icons img {
        width: 100px;
        height: 100px;
        margin-right: 25px;
    }

    div.icons:hover > img {
        animation: 2s ${bounceAnimation};
    }

    @media (max-width: 504px){
        height: 100vh;

        div.main {
            height: 80%
        }

        div.title {
            height: 20%;
        }
    }
`;