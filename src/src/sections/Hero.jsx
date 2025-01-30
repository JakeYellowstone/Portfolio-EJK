import React from 'react'

const Hero = () => {
  return (
    <section className='relative min-h-screen w-full flex flex-col'>
        <div className='w-full max-auto flex flex-col mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Bonjour, je m'appelle Esdras <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Produit de contruction & marque
            </p>
        </div>

        <div className='w-full h-full absolute inset-0'>

        </div>

    </section>
  )
}

export default Hero