import { motion } from "framer-motion";
import { calculateSizes } from '../constants';
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useMediaQuery } from "react-responsive";
import Button from '../components/Button';

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth : 768, maxWidth : 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className={`relative w-full h-screen mx-auto`}>

<div
        className={`absolute inset-0 top-[10px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Enchanté <span className="waving-hand">👋</span> , Je suis <span className='text-[#915EFF]'>Esdras Kouamé</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Et c'est mon portfolio d'Ingénieur en Cybersécurité
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
