import React from 'react';
import Image from 'next/image';
import equipamentos from '../../assets/equipamentos.png';
import plano from '../../assets/plano.png';
import personal from '../../assets/personal.png';
import atendimento from '../../assets/atendimento.png';
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
                src={equipamentos}
                width={50}
                height={50}
                alt='Icon'
              />
            </div>
            <h4>Equipamentos Modernos</h4>
            <p>Investir em equipamentos e profissionais capacitados é o que fazemos sempre. O nosso compromisso de entregar o melhor resultado passa por esse investimento constante.</p>
          </div>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={plano}
                width={50}
                height={50}
                alt='Icon'
              />
            </div>
            <h4>Plano Nutricional</h4>
            <p>Para que você atinja o seu objetivo com mais saúde é imprescindível um plano alimentar personalizado. Na One Funcional, preparamos o  seu plano alimentar de acordo com o seu objetivo.</p>
          </div>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={personal}
                width={50}
                height={50}
                alt='Icon'
              />
            </div>
            <h4>Personal Trainer</h4>
            <p>Se está buscando apoio exclusivo, aqui na One Funcional você poderá treinar em horário exclusivo com nossa equipe.</p>
          </div>
          <div className='whychose__card'>
            <div className='whychose__icon'>
              <Image
                src={atendimento}
                width={50}
                height={50}
                alt='Icon'
              />
            </div>
            <h4>Atendimento Clínico</h4>
            <p>Na One Funcional você conta com atendimento de uma equipe médica especializada em Fisioterapia, Nutrição e Saúde Integral.</p>
          </div>
        </WhyChoseUsBottom>
      </WhyChoseUsContent>
    </WhyChoseUsContainer>
  )
}

export default WhyChoseUs