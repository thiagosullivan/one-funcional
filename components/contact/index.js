import React, {useState} from 'react';
import toast from 'react-hot-toast';
import MaskedInput  from 'react-input-mask';
import { sendContactMail } from '../../services/sendMail';

import { AiFillClockCircle } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPin, IoMdMail } from 'react-icons/io';

import { ContactUsContainer, ContactUsContent } from './styles';
import theme from '../../styles/theme';
import LoadingScreen from '../LoadingScreen';


function ContactUs() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ assunto, setAssunto ] = useState('');
  const [ text, setText ] = useState('');
  const [ loading, setLoading ] = useState(false);

  console.log(nome, email, phone, assunto, text)

  async function handleSubmit(event){
    event.preventDefault();

    if(!nome || !email || !phone || !assunto || !text){
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });

      return;
    }

    try {
      setLoading(true)
      await sendContactMail(nome, email, phone, assunto, text);
      setNome('');
      setEmail('');
      setPhone('');
      setAssunto('');
      setText('');
      toast('Formulário enviado com sucesso!', {
        style: {
          background: theme.success,
          color: theme.white
        }
      });
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });
    } finally {
      // router.push('/obrigado')
      setLoading(false)
    }
  }

  return (
    <ContactUsContainer>
      <ContactUsContent>
        <div className='contactus__colOne'>          
          <h2>Como nos encontrar?</h2>
          <p>
            <IoMdPin />
            R. Montevidéu, 672 - Guanabara, Londrina - PR<br/>
            86050-020
          </p>
          <p>
            <AiFillClockCircle />
            8am - 10pm | Mon - Fri<br/>
            8 am - 6 pm | Sat
          </p>
          <p>
            <IoMdMail />
            contato@onefuncional.com.br
          </p>
          <p>
            <FaPhoneAlt />
            &#40;43&#41; 3339-7334<br/>
            &#40;43&#41; 99982-9722<br />
          </p>
        </div>
        <div className='contactus__colTwo'>
          { loading ? <LoadingScreen /> : ''}
          <h2>Envie sua mensagem</h2>
          <form onSubmit={handleSubmit}>
            <div className='contactus__inputs'>
              <input
                type='text'
                placeholder='Seu nome'
                onChange={({target}) => setNome(target.value)}
                value={nome}
              />
              <input
                type='email'
                placeholder='Seu E-mail'
                onChange={({target}) => setEmail(target.value)}
                value={email}
              />
              <MaskedInput
                mask="(99) 99999-9999"
                type='tel'
                placeholder='Seu telefone'
                onChange={({target}) => setPhone(target.value)}
                value={phone}
              />
              <input
                type='text'
                placeholder='Assunto'
                onChange={({target}) => setAssunto(target.value)}
                value={assunto}
              />
            </div>
            <textarea
              placeholder='Sua mensagem'
              onChange={({target}) => setText(target.value)}
              value={text}
            />
            <button
              type="submit"
            >
              Enviar E-mail
            </button>
          </form>
        </div>
      </ContactUsContent>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.408436307594!2d-51.173469!3d-23.330191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d00ff9ae7bc6d11!2sOne%20Funcional!5e0!3m2!1spt-BR!2sbr!4v1648438167360!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </ContactUsContainer>
  )
}

export default ContactUs