/*================== COMPONENT IMPORT ==================*/
import Academic from '../components/Academic'
import Tech from '../components/Tech'
import Profession from '../components/Profession'




const Experiences = () => {

  return (
    <section className="flex overflow-auto">

      <div className='w-full text-white text-white-600'>
            <div className='work-container'>
                

                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5 flex flex-col overflow-y-auto overflow-hidden'>
                    <Profession />
                    <Academic />
                    <Tech />
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}



export default Experiences