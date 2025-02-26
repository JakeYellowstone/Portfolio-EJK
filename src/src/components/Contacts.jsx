/*================== IMPORT REACT ==================*/
import React, { useRef, useState } from "react";

/*================== IMPORT MOTION ==================*/
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

/*================== IMPORT CONSTANTES ==================*/
import emailjs from "@emailjs/browser";
import { styles } from "../style";

/*================== IMPORT COMPONENTS ==================*/
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";


const Contacts = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(
    {
      name : '',
      email : '',
      message : '',
    }
  );

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
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl'
      >
        <p className={styles.sectionSubText}><span className='text-[#915EFF]'>Changeons le monde ensemble</span></p>
        <h3 className={styles.sectionHeadText}>Contactez moi !</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col space-y-7'>
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
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contacts, "contact");
