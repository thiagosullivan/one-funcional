import React from 'react';
import { OurPriceCard, OurPriceCardsContainer, OurPriceContainer, OurPriceContent } from './styles';
import { BsArrowRightShort } from 'react-icons/bs';

function OurPrice() {
  return (
    <OurPriceContainer>
      <OurPriceContent>
        <h2>Our Pricing</h2>
        <p>Pricing and packages</p>
        <OurPriceCardsContainer>
          <OurPriceCard>
            <h4>Basica Plan</h4>
            <div className='PriceCard__price'>
              <span>$</span>
              49
            </div>
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <div className='PriceCard__button'>
              <a href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
                Get Started
              </a>
            </div>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Beginner Plan</h4>
            <div className='PriceCard__price'>
              <span>$</span>
              79
            </div>
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <div className='PriceCard__button'>
              <a href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
                Get Started
              </a>
            </div>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Premium Plan</h4>
            <div className='PriceCard__price'>
              <span>$</span>
              99
            </div>
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Personal Trainer</li>
              <li><BsArrowRightShort /> Convienient Time</li>
              <li><BsArrowRightShort /> Special Class</li>
              <li><BsArrowRightShort /> Group Traning</li>
              <li><BsArrowRightShort /> Free Fitness Traning</li>
            </ul>
            <div className='PriceCard__button'>
              <a href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
                Get Started
              </a>
            </div>
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
            <div className='PriceCard__button'>
              <a href="https://www.whatsapp.com" rel="noreferrer noopener" target="_blank">
                Get Started
              </a>
            </div>
          </OurPriceCard>
        </OurPriceCardsContainer>
      </OurPriceContent>
    </OurPriceContainer>
  )
}

export default OurPrice