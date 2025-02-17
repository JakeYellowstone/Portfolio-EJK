import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Hero from '../components/Hero'
import Globe from 'react-globe.gl'



const [hasCopied, setHasCopied] = useState(false);
const [hasCopied1, setHasCopied1] = useState(false);

const handleCopy = () => {
        navigator.clipboard.writeText('esdraskj@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    const handleCopy1 = () => {
        navigator.clipboard.writeText('0100548605');

        setHasCopied1(true);

        setTimeout(() => {
            setHasCopied1(false);
        }, 2000)
    }

const cards = [
  {
    id: 1,
    img: <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />,
    title: "Bonjour, Je m'appelle Esdras Jonathan Kouamé",
    text: "De base, un développeur web et mobile passionné, actuellement en Côte d'Ivoire. À 24 ans, je combine une solide expérience en développement d'applications web et mobiles avec une expertise pointue en cybersécurité et intelligence artificielle, renforcée par mon master dans ce domaine. Mon objectif est de créer des solutions numériques innovantes, sécurisées et intelligentes, tout en répondant aux besoins spécifiques de mes clients. Que vous cherchiez à développer une application, sécuriser vos systèmes ou intégrer des solutions d'IA, je suis là pour vous accompagner.",
  },
  {
    id: 2,
    img: <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />,
    title: "Technologie utilisée",
    text: "Je maîtrise des technologies modernes pour le développement web, mobile, la cybersécurité et l'intelligence artificielle. Mes outils incluent React et Three.js pour des interfaces dynamiques, Python pour le backend et l'IA, ainsi que Metasploit, Nessus et Wireshark pour la cybersécurité. J'utilise également TensorFlow et PyTorch pour des solutions d'IA innovantes. Mon objectif est de combiner performance, sécurité et intelligence dans chaque projet. ",
  },
  {
    id: 3,
    img: <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
    <Globe 
        height={326}
        width={326}
        backgroundColor='rgba(0,0,0,0)'
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        /*
        labelsData={[{
            lat: 6.885114662187284, long: -5.2256781055492665,
            text : "Je suis ici !",
            color : 'white',
            size : 20,
        }]}
            */
    />
</div>,
    title: "Je travaille à distance aussi.",
    text: "En tant que freelance, je propose mes services en développement web, mobile, cybersécurité et intelligence artificielle, avec la possibilité de travailler à distance partout dans le monde. Grâce à une communication fluide et des outils collaboratifs modernes, je m'adapte à vos besoins et à votre fuseau horaire pour livrer des projets de qualité, où que vous soyez. Que vous soyez en Côte d'Ivoire, en Europe, en Amérique ou ailleurs, je suis prêt à collaborer avec vous pour concrétiser vos idées.",
  },
  {
    id: 4,
    img: <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />,
    title: "Ma passion pour la cybersécurité",
    text: "Amoureux de Dieu, passioné de conception, de nouvelles technologies et de l'évolution,aussi mon amour pour la lecture (prinicipalement de la poésie) et l'écriture m'a permis d'avoir une vision poétique néanmoins réaliste de la société. Ainsi que membre active de l'Eglise Vases d'Honneur Centre de la Foi Treichville le monitariat à l'Ecodim (encadrement des enfants de 3 à 5 ans) et quelque responsabilités à Bloom CDF.",
  },
  {
    id: 5,
    img: "dd",
    title: "Me contacter",
    text: "Passionné de technologie, membre de l'Église Vases d'Honneur, disponible à : esdraskj@gmail.com",
  },
];

export default function AnimatedCards() {
  const [currentCard, setCurrentCard] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (event) => {
    if (!scrollContainerRef.current.contains(event.target)) return;

    if (event.deltaY > 0) {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    } else if (event.deltaY < 0) {
      setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  return (
    <section className="flex min-h-screen bg-gray-900">
      {/* Partie gauche (autre contenu) */}
      <div className="w-2/3 flex">
        <Hero />
      </div>

      {/* Partie droite avec l'animation */}
      <div
        ref={scrollContainerRef}
        onWheel={handleScroll}
        className="w-1/3 flex justify-center items-center overflow-hidden relative"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 1.2, y: 50 }}
            animate={index === currentCard ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.8 }}
            className={`absolute w-full max-w-lg p-6 bg-gray-800 rounded-3xl shadow-lg text-white text-center ${
              index === currentCard ? "block" : "hidden"
            }`}
          >
            {card.img}
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
