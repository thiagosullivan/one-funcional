import React from 'react';
import { OurPriceCard, OurPriceCardsContainer, OurPriceContainer, OurPriceContent } from './styles';
import { BsArrowRightShort } from 'react-icons/bs';

function OurPrice() {
  return (
    <OurPriceContainer id="classes">
      <OurPriceContent>
        <h2>Nossos Preços</h2>
        <p>Preços e pacotes</p>
        <OurPriceCardsContainer>
          <OurPriceCard>
            <h4>Aula Experimental Gratuíta</h4>
            <div className='PriceCard__price'>
              <span>$</span>
              0
            </div>
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <a className='PriceCard__button' href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
              Get Started
            </a>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Beginner Plan</h4>
            {/* <div className='PriceCard__price'>
              <span>$</span>
              79
            </div> */}
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <a className='PriceCard__button' href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
              Get Started
            </a>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Premium Plan</h4>
            {/* <div className='PriceCard__price'>
              <span>$</span>
              99
            </div> */}
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <a className='PriceCard__button' href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
              Get Started
            </a>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Ultimate Plan</h4>
            <div className='PriceCard__price'>
              <span>$</span>
              149
            </div>
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <a className='PriceCard__button' href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
              Get Started
            </a>
          </OurPriceCard>
        </OurPriceCardsContainer>
      </OurPriceContent>
    </OurPriceContainer>
  )
}

export default OurPrice