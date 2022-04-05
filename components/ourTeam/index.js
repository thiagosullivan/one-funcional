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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
          <p>Sed in mauris nulla. Donec sed lorem interdum, molestie libero in, pellentesque dui. Phasellus ultricies magna at est tincidunt, quis.</p>
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