import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import testimonialTalisca from '../../assets/talisca-min.jpg';
import testimonialGuilherme from '../../assets/guilherme.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonalContainer, TestimonalContent, TestimonalSlider, SliderContainer, TestimonialCard } from './styles';

function Testimonal({team}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
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
          dots: false,
          className: "center",
          centerMode: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 5000,
          cssEase: "linear"
        }
      }
    ]
  };

  return (
    <TestimonalContainer>
      <TestimonalContent>
        <h2>Depoimentos</h2>
        <p className='testimonal__subtitle'>Nossos clientes</p>

        <TestimonalSlider>
          <SliderContainer
            iconLeft="https://raw.githubusercontent.com/thiagosullivan/one-funcional/df8b64778010f9eb4d1aabca7babd4adc8aae37b/assets/angle-left-solid.svg"
            iconRight="https://raw.githubusercontent.com/thiagosullivan/one-funcional/df8b64778010f9eb4d1aabca7babd4adc8aae37b/assets/angle-right-solid.svg"
          >
            <Slider {...settings}>
              <div className='slider__testimonial'>
                <TestimonialCard>
                  <div className='testimonial_quote'><FaQuoteLeft/></div>
                  <p className='testimonial__opinion'>Os únicos apoios que recebo é da academia One Funcional na qual me acolheram com muito carinho para ter total suporte para a minha preparação física e fisioterapia. Obrigada Academia One Funcional pela confiança.</p>
                  <div className='testimonial__infos'>
                    <Image
                      src={testimonialTalisca}
                      width={85}
                      height={85}
                      alt='John Doe'
                    />
                    <div className='testimonial__infos__names'>
                      <p className='testimonial__name'>Talisca Reis</p>
                      <p>Seleção Brasileira de taekwondo</p>
                    </div>
                  </div>
                </TestimonialCard>
              </div>
              <div className='slider__testimonial'>
                <TestimonialCard>
                    <div className='testimonial_quote'><FaQuoteLeft/></div>
                    <p className='testimonial__opinion'>Acho bem mais dinâmico e divertido. São os mesmos princípios do Pilates convencional, mas de uma forma mais animada. Dá um gás a mais nas aulas</p>
                    <div className='testimonial__infos'>
                      <Image
                        src={testimonialTalisca}
                        width={85}
                        height={85}
                        alt='John Doe'
                      />
                      <div className='testimonial__infos__names'>
                        <p className='testimonial__name'>Claudia Medeiros</p>
                        <p>Aluna de Neo Pilates</p>
                      </div>
                    </div>
                  </TestimonialCard>
              </div>
              <div className='slider__testimonial'>
                <TestimonialCard>
                    <div className='testimonial_quote'><FaQuoteLeft/></div>
                    <p className='testimonial__opinion'>Em 2015 rolaram muitos treinos na melhor academia de funcional de Londrina e região.</p>
                    <div className='testimonial__infos'>
                      <Image
                        src={testimonialGuilherme}
                        width={85}
                        height={85}
                        alt='John Doe'
                      /> 
                      <div className='testimonial__infos__names'>
                        <p className='testimonial__name'>Guilherme Belarmino</p>
                        <p>Campeão Pan-Americano kick-boxing</p>
                      </div>
                    </div> 
                  </TestimonialCard>
              </div>
              <div className='slider__testimonial'>
                <TestimonialCard>
                    <div className='testimonial_quote'><FaQuoteLeft/></div>
                    <p className='testimonial__opinion'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='testimonial__infos'>
                      <Image
                        src={testimonialTalisca}
                        width={85}
                        height={85}
                        alt='John Doe'
                      />
                      <div className='testimonial__infos__names'>
                        <p className='testimonial__name'>John Doe</p>
                        <p>Marketing manager</p>
                      </div>
                    </div>
                  </TestimonialCard>
              </div>
            </Slider>
          </SliderContainer>          
        </TestimonalSlider>
      </TestimonalContent>
    </TestimonalContainer>
  )
}

export default Testimonal;