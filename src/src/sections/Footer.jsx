import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t bg-black flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white text-white-500 flex gap-2'>
            <p>
                Termes & Conditions
            </p>
            <p>
                |
            </p>
            <p>Politique de confidentialité</p>
        </div>

        <div className='flex gap-3'>
            <a href="https://github.com/JakeYellowstone" target='_blank'>
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                
            </div>
            </a>
            <a href="https://www.linkedin.com/in/esdras-jonathan-kouam%C3%A9-70332b27a/" target='_blank'>
            <div className='social-icon'>
                <img src="/assets/linkedin.png" alt="linkedin" className='w-1/2 h-1/2' />
            </div>
            </a>
            <a href="https://www.instagram.com/kouameson/" target='_blank'>
            <div className='social-icon'>
                <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
            </div>
            </a>
        </div>

        <p className='text-white text-white-500'>
            2025 Esdras Kouamé. Tous droits réservés.
        </p>

    </section>
  )
}

export default Footer