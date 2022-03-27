import React, {useState} from 'react';
import MaskedInput  from 'react-input-mask';
import { BMICalculatorContainer, YourBMIContainer, YourBMIContent } from './styles';

function YourBMI() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [ result, setResult ] = useState();

  parseFloat(height)

  function handleCalc(event){
    event.preventDefault();    
    let calcResult = weight / (height * height);
    setResult(calcResult.toFixed(2));
    setHeight('');
    setWeight('');
  }

  function Magreza() {
    return (
      <div className='calculator__explanation'>
        <p>Magreza</p>
        <p>Estes valores ocorrem, normalmente, em pessoas doentes, com transtornos de comportamento alimentar, como a anorexia, ou em pessoas idosas. “Nestes casos, é necessária uma intervenção muito atenta, não só para acompanhar o aumento de peso, mas sobretudo para reposição de carências nutricionais normalmente existentes”, adianta Luísa Guimarães. Deverá, nesse sentido, consultar um especialista.</p>
      </div>
    );
  }
  function Normal() {
    return (
      <div className='calculator__explanation'>
        <p>Normal</p>
        <p>Este escalão está “associado ao peso ideal, a uma maior longevidade, menor incidência de doenças e a uma apresentação estética mais atraente”, explica a médica do Hospital Lusíadas Porto. Por isso, estes são os valores de IMC mais recomendados para uma vida saudável.</p>
      </div>
    );
  }
  function Sobrepeso() {
    return (
      <div className='calculator__explanation'>
        <p>Sobrepeso</p>
        <p>Estes valores indicam que está com um peso acima do ideal. Deverá consultar um especialista para que corrija este desvio de forma progressiva, para um objetivo de peso pretendido, com orientações adequadas ao seu caso. Excesso de peso e a obesidade são considerados uma doença crónica, com aumento progressivo da prevalência em adultos, adolescentes e mesmo crianças, de forma epidémica. O excesso de peso e a obesidade têm “repercussões graves a nível da saúde e que podem ser evitáveis”, destaca ainda a especialista, acrescentando que estes casos estão ainda associados a uma diminuição da esperança média de vida.</p>
      </div>
    );
  }
  function Obesidade() {
    return (
      <div className='calculator__explanation'>
        <p>Obesidade</p>
        <p>Estes valores indicam que está com um peso acima do ideal. Deverá consultar um especialista para que corrija este desvio de forma progressiva, para um objetivo de peso pretendido, com orientações adequadas ao seu caso. Excesso de peso e a obesidade são considerados uma doença crónica, com aumento progressivo da prevalência em adultos, adolescentes e mesmo crianças, de forma epidémica. O excesso de peso e a obesidade têm “repercussões graves a nível da saúde e que podem ser evitáveis”, destaca ainda a especialista, acrescentando que estes casos estão ainda associados a uma diminuição da esperança média de vida.</p>
      </div>
    );
  }
  function ObesidadeGrave() {
    return (
      <div className='calculator__explanation'>
        <p>Obesidade Grave</p>
        <p>Estes valores indicam que está com um peso acima do ideal. Deverá consultar um especialista para que corrija este desvio de forma progressiva, para um objetivo de peso pretendido, com orientações adequadas ao seu caso. Excesso de peso e a obesidade são considerados uma doença crónica, com aumento progressivo da prevalência em adultos, adolescentes e mesmo crianças, de forma epidémica. O excesso de peso e a obesidade têm “repercussões graves a nível da saúde e que podem ser evitáveis”, destaca ainda a especialista, acrescentando que estes casos estão ainda associados a uma diminuição da esperança média de vida.</p>
      </div>
    );
  }

  function RenderResults() {
    if (result <= 18.49) {
      return (
        <Magreza />
      )
    } else if (result <= 24.9) {
      return (
        <Normal />
      )
    } else if (result <= 29.9) {
      return (
        <Sobrepeso />
      )
    } else if (result <= 39.9) {
      return (
        <Obesidade />
      )
    } else if (result >= 40.0 ) {
      return (
        <ObesidadeGrave />
      )
    } else {
      return null
    }
    
  }


  return (
    <YourBMIContainer brUrl="https://raw.githubusercontent.com/thiagosullivan/one-funcional/main/assets/your-bmi.webp">
      <YourBMIContent>
        <h2>What is your <span>BMI</span></h2>
        <BMICalculatorContainer>
          <div className='bmi__top'>
            <form onSubmit={handleCalc}>
              <div className='calculator__input'>
                <span>Your height</span>
                <MaskedInput
                  mask="9.99"
                  type="tel"
                  placeholder='Ex.: 1,70'
                  onChange={({target}) => setHeight(target.value)}
                  value={height}
                  required
                  // className={`${loading ? "disabled-input" : ""}`}
                />
              </div>
              <div className='calculator__input'>
                <span>Your weight</span>
                <input required type='number' placeholder='Ex.: 60' value={weight} onChange={({target}) => setWeight(target.value)} />
              </div>
              <button type="submit">Compute BMI</button>
            </form>
            <div className='calculator__result'>
              <h4>Your result:</h4>
              <p className='calculator__number'>{result > 0 ? result : '0.0'}</p>
              <RenderResults />
            </div>
          </div>
          <p className='bmi__note'>Nota: o cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular, como é o caso de alguns atletas, podem apresentar um IMC acima do normal. O ideal é consultar um nutricionista para fazer uma avaliação mais detalhada.</p>
        </BMICalculatorContainer>
      </YourBMIContent>
    </YourBMIContainer>
  )
}

export default YourBMI;