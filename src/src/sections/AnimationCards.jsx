import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Hero from '../components/Hero'

const cards = [
  {
    id: 1,
    img: "/assets/grid1.png",
    title: "Bonjour, Je m'appelle Esdras Jonathan Kouamé",
    text: "De base, un développeur web et mobile passionné, actuellement en Côte d'Ivoire. À 24 ans, je combine une solide expérience en développement d'applications web et mobiles avec une expertise pointue en cybersécurité et intelligence artificielle, renforcée par mon master dans ce domaine. Mon objectif est de créer des solutions numériques innovantes, sécurisées et intelligentes, tout en répondant aux besoins spécifiques de mes clients. Que vous cherchiez à développer une application, sécuriser vos systèmes ou intégrer des solutions d'IA, je suis là pour vous accompagner.",
  },
  {
    id: 2,
    img: "/assets/grid2.png",
    title: "Technologie utilisée",
    text: "React, Three.js, Python, Metasploit, Nessus, TensorFlow, PyTorch...",
  },
  {
    id: 3,
    img: "//unpkg.com/three-globe/example/img/earth-day.jpg",
    title: "Je travaille à distance aussi.",
    text: "Freelance en cybersécurité, développement et IA, prêt à collaborer à distance.",
  },
  {
    id: 4,
    img: "/assets/grid3.png",
    title: "Ma passion pour la cybersécurité",
    text: "Protection des systèmes, IA et innovation en sécurité.",
  },
  {
    id: 5,
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
            {card.img && <img src={card.img} alt={card.title} className="w-full rounded-lg mb-4 object-contain h-40" />}
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
