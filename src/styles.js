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
    height: 90vh;
    margin: 0 auto;
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: center;
    box-sizing: border-box;
  

    div.main { 
        flex: 1 1 60%; 
        padding: 10px;
    }

    div.icons { 
        padding: 15px 0;
        display: flex; 
        align-items: center; 
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

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) { 
        div.main { 
            flex: 1 1 50%; 
        }

        div.icons {
            padding: 20px 0;
        }

        img { 
            width: 150px; 
        }

        div.icons  p {
            font-size: .9em;
        }

        h1 { 
            font-weight: lighter;
            font-size: 5em; 
        }
     }
     
    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        padding: 0 100px;

        h1 { 
            font-weight: lighter;
            font-size: 5em; 
            margin-bottom: 15px;
        }

        div.icons {
            padding: 35px 0;
        }

     }

    /* // Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) { 
        padding: 0 200px;

        div.icons {
            padding: 50px 0;
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
    height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex-flow: row wrap;
    background-image: url(${oceanImg});
    color: #FFF;

    div.main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        align-content: center;
        flex: 1 1 60%;
    }

    div.title {
        height: 20%;
        min-width: 250px;
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
        width: 50px;
        height: 50px;
        margin-right: 25px;
    }

    div.icons:hover > img {
        animation: 2s ${bounceAnimation};
    }

    @media (min-width: 576px) { 
        height: 40vh
    }

    @media (min-width: 768px) { 
        height: 30vh;

        div.main {
            height: 100%;
            flex: 1 1 50%;
        }

        div.title {
            height: 100%;
            font-size: 2em;
            font-weight: lighter;
        }
     }

    @media (min-width: 992px) {  }

    @media (min-width: 1200px) {  }
`;