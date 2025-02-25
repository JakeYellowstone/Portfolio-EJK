/*================== IMPORT COMPONENT ==================*/
import Contacts from '../components/Contacts'
import StarsCanvas from '../components/canvas/Stars'

const Contact = () => {

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