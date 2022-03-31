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
        />
        <AboutUsText>
          <span>Information about us</span>
          <h2>The <span>One Funcional</span> workout training center</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;,s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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