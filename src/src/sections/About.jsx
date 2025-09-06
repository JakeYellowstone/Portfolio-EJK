/*================== IMPORT REACT ==================*/
import { useState } from "react";

/*================== IMPORT MOTION ==================*/
import { motion } from "framer-motion";

/*================== IMPORT THREE ==================*/
import Globe from "react-globe.gl";

const cards = [
  {
    id: 1,
    img: (
      <img
        src="./assets/grid1.png"
        alt="Kouamé Esdras Jonathan"
        className="w-full sm:h-[276px] h-fit object-contain rounded-2xl"
      />
    ),
    title: "C'est moi !",
    text: "Passionné par le développement, la cybersécurité et l'IA. Mon objectif est de créer des solutions numériques innovantes, sécurisées et intelligentes, capables d'avoir un impact sur le monde, tout en répondant aux besoins spécifiques de mes clients.",
  },
  {
    id: 2,
    img: (
      <img
        src="./assets/grid2.png"
        alt="Technologies"
        className="w-full sm:h-[276px] h-fit object-contain rounded-2xl"
      />
    ),
    title: "Technologies utilisées",
    text: "J'utilise des technologies modernes pour le développement web, mobile, la cybersécurité et l'intelligence artificielle. Mon objectif est de combiner performance, sécurité et intelligence dans chaque projet.",
  },
  {
    id: 3,
    img: (
      <img
        src="https://ik.imagekit.io/johnsetsama/Portfolio/world.png?updatedAt=1757181782461"
        alt="World"
        className="w-full sm:h-[276px] h-fit object-contain rounded-2xl"
      />
    ),
    title: "Je travaille aussi à distance.",
    text: "Je propose aussi mes services avec la possibilité de travailler à distance. Où que vous soyez, je suis prêt à collaborer avec vous pour concrétiser vos idées.",
  },
  {
    id: 4,
    img: (
      <img
        src="./assets/grid3.png"
        alt="Cybersécurité"
        className="w-full sm:h-[266px] h-fit object-contain rounded-2xl"
      />
    ),
    title: "Ma passion pour la cybersécurité",
    text: "La cybersécurité et l'intelligence artificielle sont au cœur de ma passion pour la technologie. Je suis constamment à l'affût des dernières tendances et techniques. Pour moi, la cybersécurité et l'IA ne sont pas juste des compétences, ce sont des outils pour modéliser l'avenir.",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex min-h-screen items-center justify-center  w-full px-4">
      <div className="relative w-full max-w-5xl flex justify-center items-center">
        {cards.map((card, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, x: 0 }}
              animate={{
                opacity: position === 1 ? 1 : 0.4,
                scale: position === 1 ? 1 : 0.85,
                x:
                  position === 2
                    ? 280
                    : position === 0
                    ? -280
                    : 0,
                zIndex: position === 1 ? 10 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`absolute xl:w-[70%] w-[90%] max-w-lg p-6 bg-[#210f47]/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 text-white text-center transform-gpu ${
                position === 1 ? "z-20" : "z-0"
              }`}
            >
              <div className="mb-4">{card.img}</div>
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#915EFF] to-[#4A90E2] bg-clip-text text-transparent">
                {card.title}
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          );
        })}

        {/* Boutons navigation */}
        <button
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
            )
          }
          className="absolute z-30 left-3 sm:left-10 top-1/2 transform -translate-y-1/2 bg-[#915EFF]/80 hover:bg-[#915EFF] p-3 rounded-full text-white shadow-lg transition duration-300"
        >
          ◀
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
          }
          className="absolute z-30 right-3 sm:right-10 top-1/2 transform -translate-y-1/2 bg-[#915EFF]/80 hover:bg-[#915EFF] p-3 rounded-full text-white shadow-lg transition duration-300"
        >
          ▶
        </button>

        {/* Indicateurs (dots) */}
        <div className="absolute bottom-6 flex justify-center gap-3 w-full">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#915EFF]" : "bg-white/40"
              }`}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
