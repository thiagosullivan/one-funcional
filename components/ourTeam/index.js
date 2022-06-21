import React from 'react';
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { OurTeamContainer, OurTeamContent, OurTeamSlider, SliderContainer, TeamCard } from './styles';

function OurTeam({team}) {

  const slidersInfos = team.map((team, index) => {
    return (
      <TeamCard
        key={index}
        teamPhoto={team.teamPhoto.url}    
      >
        <div className='teamCard__infos'>
          <div className='teamCard__infos__content'>
            <p>{team.teamName}</p>
            <span>{team.teamRole}</span>
            <p className='degrees'>{team.degrees}</p>
            <div className='teamCard__socialmedia'>
              <a href={team.fbLink} className={(team.fbLink == '' ? 'disable__socialmedia' : '')} rel="noreferrer noopener" target="_blank"><FaFacebookF/></a>          
              <a href={team.igLink} className={(team.igLink == '' ? 'disable__socialmedia' : '')} rel="noreferrer noopener" target="_blank"><FaInstagram/></a>
              <a href={team.twLink} className={(team.twLink == '' ? 'disable__socialmedia' : '')} rel="noreferrer noopener" target="_blank"><FaTwitter/></a>
            </div>
          </div>
        </div>
      </TeamCard>
    )
  })

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 100,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
          className: "center",
          centerMode: true,
        }
      }
    ]
  };

  return (
    <OurTeamContainer id="ourTeam">
      <OurTeamContent>
        <h2>Nosso Time</h2>
        <p className='ourTeam__subtitle'>Conheça nossos profissionais</p>

        <OurTeamSlider>
          <p>Na One Funcional você conta com o apoio de profissionais qualificados e especializados. Nosso time é coordenado por profissionais de destaque no mercado de saúde integral.</p>
          <SliderContainer
            iconLeft="https://raw.githubusercontent.com/thiagosullivan/one-funcional/df8b64778010f9eb4d1aabca7babd4adc8aae37b/assets/angle-left-solid.svg"
            iconRight="https://raw.githubusercontent.com/thiagosullivan/one-funcional/df8b64778010f9eb4d1aabca7babd4adc8aae37b/assets/angle-right-solid.svg"
          >
            <Slider {...settings}>
              {slidersInfos}
            </Slider>
          </SliderContainer>          
        </OurTeamSlider>
      </OurTeamContent>
    </OurTeamContainer>
  )
}

export default OurTeam