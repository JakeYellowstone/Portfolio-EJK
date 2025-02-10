import React from 'react'

const Contact = () => {
  return (
    <section className='c-space my-20'>
         <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
            <div className='contact-container'>
                <h3 className='head-text'> Venons échanger ! </h3>
                <p className='text-lg text-white mt-3'>
                    Si vous souhaiter construire une nouveau site web, qui sort de l'ordinaire, et se demarque du marché. 
                </p>
            </div>
         </div>
    </section>
  )
}

export default Contact