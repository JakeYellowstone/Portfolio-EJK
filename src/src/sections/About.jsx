/*================== IMPORT REACT ==================*/
import { useState, Suspense }  from "react";

/*================== IMPORT MOTION ==================*/
import { motion } from "framer-motion";

/*================== IMPORT THREE ==================*/
import Globe from "react-globe.gl";
import { Canvas } from '@react-three/fiber'; 
import { OrbitControls } from '@react-three/drei'; 

/*================== COMPONENT IMPORT ==================*/
import CanvasLoader from '../components/CanvasLoader'
import Moi from '../components/Moi'

const cards = [
  {
    id: 1,
    img: <img src="./assets/grid1.png" alt="Kouamé Esdras Jonathan" className="w-full sm:h-[276px] h-fit object-contain" />,
    title: "C'est moi !",
    text: "Passioné par le développement, la cybersécurité et l'IA. Mon objectif est de créer des solutions numériques innovantes, sécurisées et intelligentes, capables d'avoir un impact sur le monde, tout en répondant aux besoins spécifiques de mes clients.",
  },
  {
    id: 2,
    img: <img src="./assets/grid2.png" alt="Kouamé Esdras Jonathan" className="w-full sm:h-[276px] h-fit object-contain" />,
    title: "Technologies utilisées",
    text: "J'utilise des technologies modernes pour le développement web, mobile, la cybersécurité et l'intelligence artificielle. Mon objectif est de combiner performance, sécurité et intelligence dans chaque projet.",
  },
  {
    id: 3,
    img: (
      <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
        <Globe
          height={326}
          width={326}
          showAtmosphere 
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
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
    title: "Je travaille aussi à distance.",
    text: "Je propose aussi mes services avec la possibilité de travailler à distance. Où que vous soyez, je suis prêt à collaborer avec vous pour concrétiser vos idées.",
  },
  {
    id: 4,
    img: <img src="./assets/grid3.png" alt="Kouamé Esdras Jonathan" className="w-full sm:h-[266px] h-fit object-contain" />,
    title: "Ma passion pour la cybersécurité",
    text: "La cybersécurité et l'intelligence artificielle sont au cœur de ma passion pour la technologie. Je suis constamment à l'affût des dernières tendances et techniques. Pour moi, la cybersécurité et l'IA ne sont pas juste des compétences, ce sont des outils pour modeliser l'avenir.",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex min-h-screen items-center justify-center w-full">
      <div className="relative w-full max-w-4xl flex justify-center items-center">

                <div className='h-screen w-full z-[-10]'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Moi position-y={-3} scale={3}/>
                        </Suspense>
                    </Canvas>
                </div>

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
              className={`absolute xl:w-[100%] max-w-md p-6 bg-[#210f47] rounded-3xl shadow-lg text-white text-center ${
                position === 1 ? "z-10" : "z-0"
              }`}
            >
              {card.img}
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm">{card.text}</p>
            </motion.div>
          );
        })}
        <button
          onClick={() => {setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)}}
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition"
        >
          ◀
        </button>
        <button
          onClick={() => {setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);}}
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-gray-600 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
