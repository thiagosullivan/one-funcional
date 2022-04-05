import axios from 'axios';

export const sendContactMail = async (nome, email, phone, assunto, text) => {
  const data = {
    nome, email, phone, assunto, text
  };

  try {
  return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}