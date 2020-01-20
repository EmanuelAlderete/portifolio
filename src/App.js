import React from 'react';
import { HomeSection, ResetCSS, FundationsSection, BounceArrow, StyledLink } from './styles';

import cloudImg from './images/cloud.svg';
import fastImg from './images/fast.svg';
import graphImg from './images/graph.svg';
import arrow from './images/white-arrow.svg';

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
            <StyledLink to="techs">TECNOLOGIAS</StyledLink>
            <StyledLink to="projects">PROJETOS</StyledLink>
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
    </div>
  );
}

export default App;
