import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import testimonialImg from '../../assets/testimonial-1.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonalContainer, TestimonalContent, TestimonalSlider, SliderContainer, TestimonialCard } from './styles';

function Testimonal({team}) {

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
    <TestimonalContainer>
      <TestimonalContent>
        <h2>Testimonial</h2>
        <p className='testimonal__subtitle'>Our clients</p>

        <TestimonalSlider>
          <SliderContainer
            iconLeft="https://raw.githubusercontent.com/thiagosullivan/one-funcional/df8b64778010f9eb4d1aabca7babd4adc8aae37b/assets/angle-left-solid.svg"
            iconRight="https://raw.githubusercontent.com/thiagosullivan/one-funcional/df8b64778010f9eb4d1aabca7babd4adc8aae37b/assets/angle-right-solid.svg"
          >
            <Slider {...settings}>
              <div className='slider__testimonial'>
                <TestimonialCard>
                  <div className='testimonial_quote'><FaQuoteLeft/></div>
                  <p className='testimonial__opinion'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className='testimonial__infos'>
                    <Image
                      src={testimonialImg}
                      width={85}
                      height={85}
                    />
                    <div className='testimonial__infos__names'>
                      <p className='testimonial__name'>John Doe</p>
                      <span>Marketing manager</span>
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
                        src={testimonialImg}
                        width={85}
                        height={85}
                      />
                      <div className='testimonial__infos__names'>
                        <p className='testimonial__name'>John Doe</p>
                        <span>Marketing manager</span>
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
                        src={testimonialImg}
                        width={85}
                        height={85}
                      />
                      <div className='testimonial__infos__names'>
                        <p className='testimonial__name'>John Doe</p>
                        <span>Marketing manager</span>
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
                        src={testimonialImg}
                        width={85}
                        height={85}
                      />
                      <div className='testimonial__infos__names'>
                        <p className='testimonial__name'>John Doe</p>
                        <span>Marketing manager</span>
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