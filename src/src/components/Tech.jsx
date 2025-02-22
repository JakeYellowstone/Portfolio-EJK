import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../components/hoc";
import { technologies } from "../constants/const";
import { styles } from "../style";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center overflow-hidden gap-10'>
        <h2 className={`${styles.heroHeadText} text-white mb-3`}>
            Technologies <span className='text-[#915EFF]'>Utilisées</span>
          </h2>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");