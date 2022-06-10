import React from 'react';
import { OurPriceBottom, OurPriceCard, OurPriceCardsContainer, OurPriceContainer, OurPriceContent } from './styles';
import { BsArrowRightShort } from 'react-icons/bs';

function OurPrice() {
  return (
    <OurPriceContainer id="classes">
      <OurPriceContent>
        <h2>Nossos Preços</h2>
        <p>Preços e pacotes</p>
        <OurPriceCardsContainer>
          <OurPriceCard>
            <h4>Aula Experimental Gratuita</h4>
            {/* <div className='PriceCard__price'>
              <span>$</span>
              0
            </div> */}
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Funcional</li>
              <li><BsArrowRightShort /> Funcional para Esportes</li>
              <li><BsArrowRightShort /> Musculação</li>
              <li><BsArrowRightShort /> Neo Pilates</li>
              <li><BsArrowRightShort /> Pilates</li>
            </ul>
            <a
              className='PriceCard__button'
              href="https://api.whatsapp.com/send?phone=5543999829722&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita."
              rel="noreferrer noopener"
              target="_blank"
            >
              Agende sua aula
            </a>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Avaliação Nutricional</h4>
            {/* <div className='PriceCard__price'>
              <span>$</span>
              79
            </div> */}
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Emagrecimento</li>
              <li><BsArrowRightShort /> Ganho de Massa</li>
              <li><BsArrowRightShort /> Educação Alimentar</li>
              <li><BsArrowRightShort /> Saúde e Prevenção de Doença</li>
              <li><BsArrowRightShort /> Rendimento no Esporte</li>
            </ul>
            <a
              className='PriceCard__button'
              href="https://api.whatsapp.com/send?phone=5543999829722&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20Avalia%C3%A7%C3%A3o%20Nutricional."
              rel="noreferrer noopener"
              target="_blank"
            >
              Chame no Whatsapp
            </a>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Clínica One</h4>
            {/* <div className='PriceCard__price'>
              <span>$</span>
              99
            </div> */}
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Microfisioterapia</li>
              <li><BsArrowRightShort /> Palmilhas Posturais e Proprioceptivas</li>
              <li><BsArrowRightShort /> Terapia Manual (Osteopatia/Quiropraxia)</li>
              <li><BsArrowRightShort /> Fisioterapia Integrativa (One Saúde integral)</li>
              <li><BsArrowRightShort /> Nutrição Esportiva/Funcional</li>
            </ul>
            <a
              className='PriceCard__button'
              href="https://api.whatsapp.com/send?phone=5543999829722&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20fisioterapia."
              rel="noreferrer noopener"
              target="_blank"
            >
              Chame no Whatsapp
            </a>
          </OurPriceCard>
          <OurPriceCard>
            <h4>Pilates</h4>
            {/* <div className='PriceCard__price'>
              <span>$</span>
              149
            </div> */}
            <ul className='PriceCard__list'>
              <li><BsArrowRightShort /> Alívio de Dores</li>
              <li><BsArrowRightShort /> Correção de Postura</li>
              <li><BsArrowRightShort /> Aumento de Força</li>
              <li><BsArrowRightShort /> Ganho de Flexibilidade</li>
              <li><BsArrowRightShort /> Melhora de Equilíbrio e Coordenação</li>
            </ul>
            <a
              className='PriceCard__button'
              href="https://api.whatsapp.com/send?phone=5543999829722&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Pilates"
              rel="noreferrer noopener"
              target="_blank"
            >
              Chame no Whatsapp
            </a>
          </OurPriceCard>
        </OurPriceCardsContainer>
        <OurPriceBottom>
          <p>Não encontrou o que precisava?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5543999829722"
            className="postcontainer__btn"
            rel="noreferrer noopener"
            target="_blank"
          >Fale conosco</a>
        </OurPriceBottom>
      </OurPriceContent>
    </OurPriceContainer>
  )
}

export default OurPrice