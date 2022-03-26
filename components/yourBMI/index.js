import React from 'react';
import { BMICalculatorContainer, YourBMIContainer, YourBMIContent } from './styles';

function YourBMI() {
  return (
    <YourBMIContainer brUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/your-bmi.webp">
      <YourBMIContent>
        <h2>What is your <span>BMI</span></h2>
        <BMICalculatorContainer>
          <form>
            <div className='calculator__input'>
              <span>Your height</span>
              <input type='text' />
            </div>
            <div className='calculator__input'>
              <span>Your weight</span>
              <input type='text' />
            </div>
            <button>Compute BMI</button>
          </form>
          <div className='calculator__result'>
            <h4>Your result:</h4>
            <p className='calculator__number'>23,9</p>
            <span>Normal weight</span>
            <p className='calculator__explanation'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </BMICalculatorContainer>
      </YourBMIContent>
    </YourBMIContainer>
  )
}

export default YourBMI;