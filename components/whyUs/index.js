import React from 'react';
import Image from 'next/image';
import stationaryBike from '../../assets/stationary-bike.png';
import pills from '../../assets/pills.png';
import dumbbell from '../../assets/dumbbell.png';
import heart from '../../assets/heart.png';
import { WhyChoseUsBottom, WhyChoseUsContainer, WhyChoseUsContent } from './styles';

function WhyChoseUs() {
  return (
    <WhyChoseUsContainer id="services">
      <WhyChoseUsContent>
        <h2>Why Chose Us</h2>
        <p>Push your limits forward</p>
        <WhyChoseUsBottom>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={stationaryBike}
                width={50}
                height={50}
              />
            </div>
            <h4>Modern equipment</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
          </div>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={pills}
                width={50}
                height={50}
              />
            </div>
            <h4>Healthy nutrition plan</h4>
            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={dumbbell}
                width={50}
                height={50}
              />
            </div>
            <h4>Proffesponal training plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
          </div>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={heart}
                width={50}
                height={50}
              />
            </div>
            <h4>Unique to your needs</h4>
            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
        </WhyChoseUsBottom>
      </WhyChoseUsContent>
    </WhyChoseUsContainer>
  )
}

export default WhyChoseUs