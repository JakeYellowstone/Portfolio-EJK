import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

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
    <section className='c-space my-20'>
         <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 w-full h-full object-cover' />
            <div className='contact-container'>
                <h3 className='head-text'> Venons échanger ! </h3>
                <p className='text-lg text-white mt-3'>
                    Si vous souhaitez construire une nouveau site web, qui sort de l'ordinaire, et se demarque du marché. 
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                  <label className='space-y-3'>
                    <span className='field-label'>
                      Nom et prénoms
                    </span>
                    <input 
                      type="text"
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      required
                      className='field-input mt-2'
                      placeholder='Remplissez ici' 
                    />
                  </label>
                  <label className='space-y-3'>
                    <span className='field-label'>
                      Votre Email
                    </span>
                    <input 
                      type="email"
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                      className='field-input mt-2'
                      placeholder='Votre email' 
                    />
                  </label>
                  <label className='space-y-3'>
                    <span className='field-label'>
                      Votre message
                    </span>
                    <textarea 
                      name='message'
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className='field-input mt-2'
                      placeholder="J'ai un travail pour vous..." 
                    />
                  </label>

                  <button className='field-btn' type='submit' disabled={loading}>
                    {loading ? 'Envoi en cours...' : "Envoyez message"}
                  </button>
                </form>
            </div>
         </div>
    </section>
  )
}

export default Contact