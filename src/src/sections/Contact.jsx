import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Contacts from '../components/Contacts'
import StarsCanvas from '../components/canvas/Stars'

const Contact = () => {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(
    {
      name : '',
      email : '',
      message : '',
    }
  );

  // service_embth4p

  const handleChange = ({target : {name, value}}) => {
    setForm({...form, [name] : value})
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      await emailjs.send(
        'service_embth4p', 
        'template_y779de5',
        {
          from_name : form.name,
          to_name : 'Esdras Jonathan',
          from_email : form.email,
          to_email : 'esdraskj@gmail.com',
          message : form.message
        },
        'k_TBNgXnxxqVAM1eD'
      )

      setLoading(false); 
      alert("Votre message a bien été envoyé !");

      setForm({
        name : '',
        email : '',
        message : '',
      })
      
    } catch (error) {

      setLoading(false);
      console.log(error);

      alert("Quelque chose s'est mal passé !")
      
    }

  };

  return (
    <section className='min-h-screen'>
         <div className='relative z-0'>
          <Contacts />
          <StarsCanvas />
        </div>
    </section>
  )
}

export default Contact