import React from 'react';
import MaskedInput  from 'react-input-mask';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPin, IoMdMail } from 'react-icons/io';
import { ContactUsContainer, ContactUsContent } from './styles';


function ContactUs() {
  return (
    <ContactUsContainer>
      <ContactUsContent>
        <div className='contactus__colOne'>
          <h2>How to find us?</h2>
          <p>
            <IoMdPin />
            Avenida Higienópolis, Centro, Londrina - PR<br/>
            86010-380
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
            &#40;43&#41; 99999-9999<br/>
            &#40;43&#41; 88888-8888
          </p>
        </div>
        <div className='contactus__colTwo'>
          <h2>Send your questions</h2>
          <form>
            <div className='contactus__inputs'>
              <input
                type='text'
                placeholder='Your name'
              />
              <input
                type='email'
                placeholder='Email'
              />
              <MaskedInput
                mask="(99)99999-9999"
                type='tel'
                placeholder='Phone'
              />
              <input
                type='text'
                placeholder='Subject'
              />
            </div>
            <textarea
              placeholder='Your name'
            />
            <button>Send Email</button>
          </form>
        </div>
      </ContactUsContent>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.408436307594!2d-51.173469!3d-23.330191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d00ff9ae7bc6d11!2sOne%20Funcional!5e0!3m2!1spt-BR!2sbr!4v1648438167360!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </ContactUsContainer>
  )
}

export default ContactUs