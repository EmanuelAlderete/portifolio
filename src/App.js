import React from 'react';
import { HomeSection, ResetCSS, FundationsSection, TechsSection, BounceArrow, StyledLink } from './styles';

import cloudImg from './images/cloud.svg';
import fastImg from './images/fast.svg';
import graphImg from './images/graph.svg';
import arrow from './images/white-arrow.svg';
import nodeImg from './images/node.svg';
import reactImg from './images/react.svg';
import mongoImg from './images/mongo.svg';

function App() {
  return (
    <div>
      <HomeSection>
        <div>
          <ResetCSS />
          <h1>EMANUEL ALDERETE</h1>
          <p>DESENVOLVEDOR WEB</p>
        </div>
        <BounceArrow to={"fundations"} spy={true} smooth={true} offset={50} delay={150} duration={1000}>
          <img src={arrow}  alt="arrow-down"/>
        </BounceArrow>
      </HomeSection>
      <FundationsSection name="fundations" >
        <div className="main title">
          <h1>Fundamentos</h1>
          <p>
            Ao desenvolver um sistema, meu objetivo é entregar um produto rápido, seguro e completo.
            Você pode conferir um pouco sobre cada princípio que será implementado em seu projeto.
                </p>
          <div className="buttons">
            <StyledLink to="techs" spy={true} smooth={true} offset={50} delay={150} duration={1000}>TECNOLOGIAS</StyledLink>
            <StyledLink to="projects" spy={true} smooth={true} offset={50} delay={150} duration={1000}>PROJETOS</StyledLink>
          </div>
        </div>
        <div className="main">
          <div className="icons">
            <img src={cloudImg} alt="" />
            <div>
              <h4>ARMAZENAMENTO EM NUVEM</h4>
              <p>Acesso 24/7. Dados seguros com backups feitos automaticamente.</p>
            </div>
          </div>
          <div className="icons">
            <img src={fastImg} alt="" />
            <div>
              <h4>VELOCIDADE E FLUIDEZ</h4>
              <p>
                Aplicações velozes que funcionam em qualquer dispositivo.
                        </p>
            </div>
          </div>
          <div className="icons">
            <img src={graphImg} alt="" />
            <div>
              <h4>ESCALABILIDADE</h4>
              <p>
                Seu negócio aumentou? Sem problema, seu sistema aumenta junto.
                        </p>
            </div>
          </div>
        </div>
      </FundationsSection>
      <TechsSection name="techs" >
        <div className="main title"> 
          <h1>TECNOLOGIAS</h1>
        </div>
        <div className="main">
          <div className="icons">
            <img src={reactImg} alt="ReactJS" />
            <h4>ReactJS</h4>
          </div>
          <div className="icons">
            <img src={nodeImg} alt="NodeJS" />
            <h4>NodeJS</h4>
          </div>
          <div className="icons">
            <img src={mongoImg} alt="MongoDB" />
            <h4>MongoDB</h4>
          </div>
        </div>
      </TechsSection>
    </div>
  );
}

export default App;
