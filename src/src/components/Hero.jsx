/*================== IMPORT CONSTANTES ==================*/
import { styles } from "../style";

/*================== IMPORT COMPONENTS ==================*/
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]">
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Animation d'entrée */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Enchanté <span className="inline-block waving-hand animate-wave">👋</span>,<br />
            Je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#4A90E2]">
              Esdras Jonathan Kouamé
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`${styles.heroSubText} text-white-100 max-w-2xl mx-auto leading-relaxed`}
          >
            Bienvenue dans mon univers numérique ✨<br />
            Voici mon <span className="text-[#915EFF] font-semibold">portfolio</span> d’Ingénieur en{" "}
            <span className="font-bold text-white">Cybersécurité</span>.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#915EFF] to-[#4A90E2] text-white shadow-lg shadow-[#915EFF]/40 hover:scale-105 transform transition"
            >
              Scroller vers le bas pour plus
            </a>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
