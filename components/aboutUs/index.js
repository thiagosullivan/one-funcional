import React from 'react';
import Image from 'next/image';
import { AboutUsBottom, AboutUsContainer, AboutUsList, AboutUsText, AboutUsTop } from './styles'
import AboutUsImg from '../../assets/about-us-woman-gym-opt.webp';
import { BsArrowRightShort } from 'react-icons/bs';

function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs">
      <AboutUsTop>
        <Image
          src={AboutUsImg}
          alt="Mulher treinando"
          className='imgAboutUs'
        />
        <AboutUsText>
          <span>Informações sobre nós</span>
          <h2>A <span>One Funcional</span> é mais que uma simples academia</h2>
          <p>Somos um Centro de Treinamento Especializado. Na One Funcional o seu treino é acompanhado por educadores físicos altamente capacitados, fisioterapeutas com especializações diversas, apoiados por equipamentos modernos e indicados pelos maiores especialistas em treinamento funcional, pilates e fisioterapia do Brasil. Além das modalidades de treino, na One Funcional você conta com atendimento médico para nutrição, fisioterapia, microfisioterapia e saúde integral.</p>
          <AboutUsList>
            <li>
              <BsArrowRightShort />
              <p>Men fitness and workout</p>
            </li>
            <li>
              <BsArrowRightShort />
              <p>Women fitness and workout</p>
            </li>
            <li>
              <BsArrowRightShort />
              <p>Personal trainings</p>
            </li>
          </AboutUsList>
        </AboutUsText>
      </AboutUsTop>
      <AboutUsBottom>
        <div className='specialization__aboutus'>
          <div className='specialization__number'>
            <span>100</span>
          </div>
          <h4>Treinamento funcional</h4>
          <p>Especializado</p>
        </div>
        <div className='specialization__aboutus'>
          <div className='specialization__number'>
            <span>100</span>
          </div>
          <h4>Pilates</h4>
          <p>Neopilates</p>
        </div>
        <div className='specialization__aboutus'>
          <div className='specialization__number'>
            <span>100</span>
          </div>
          <h4>Fisioterapia</h4>
          <p>Terapia Manual</p>
        </div>
        <div className='specialization__aboutus'>
          <div className='specialization__number'>
            <span>100</span>
          </div>
          <h4>Microfisioterapia</h4>
          <p>Tratamentos especializados</p>
        </div>
      </AboutUsBottom>
    </AboutUsContainer>
  )
}

export default AboutUs