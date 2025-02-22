import { motion } from "framer-motion";
import { useState } from "react";
import Globe from "react-globe.gl";

const cards = [
  {
    id: 1,
    img: <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />,
    title: "Bonjour, Je m'appelle Esdras Jonathan Kouamé",
    text: "Développeur web et mobile passionné, expert en cybersécurité et IA...",
  },
  {
    id: 2,
    img: <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />,
    title: "Technologie utilisée",
    text: "React, Three.js, Python, TensorFlow, PyTorch, Metasploit, Nessus...",
  },
  {
    id: 3,
    img: (
      <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
        <Globe
          height={326}
          width={326}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[
            {
              lat: 6.885114662187284,
              long: -5.2256781055492665,
              text: "Je suis ici !",
              color: "white",
              size: 20,
            },
          ]}
        />
      </div>
    ),
    title: "Je travaille à distance aussi.",
    text: "Je propose aussi mes services à distance, où que vous soyez...",
  },
  {
    id: 4,
    img: <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />,
    title: "Ma passion pour la cybersécurité",
    text: "Cybersécurité et intelligence artificielle sont au cœur de ma passion...",
  },
  {
    id: 5,
    img: <img src="/assets/grid4.png" alt="grid-4" className="w-full sm:h-[276px] h-fit object-contain" />,
    title: "Me contacter",
    text: "Passionné de conception, technologies, lecture et écriture...",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="flex min-h-screen items-center justify-center w-full">
      <div className="relative w-full max-w-4xl flex justify-center items-center">
        {cards.map((card, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, x: 0 }}
              animate={{
                opacity: position === 1 ? 1 : 0.6,
                scale: position === 1 ? 1 : 0.8,
                x: position === 2 ? 200 : position === 0 ? -200 : 0,
                zIndex: position === 1 ? 2 : 1,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute w-[90%] max-w-md p-6 bg-gray-800 rounded-3xl shadow-lg text-white text-center ${
                position === 1 ? "z-10" : "z-0"
              }`}
            >
              {card.img}
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm">{card.text}</p>
            </motion.div>
          );
        })}

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
