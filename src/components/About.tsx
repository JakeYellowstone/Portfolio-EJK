import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, BrainCircuit, Sparkles, Target } from "lucide-react";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";

/* ======================================================
   CARDS ANIMÉES — ANCIEN PORTFOLIO (RÉINTÉGRÉES & RELOOKÉES)
   ====================================================== */

const animatedCards = [
  {
    id: 1,
    img: (
      <img
        src="https://ik.imagekit.io/johnsetsama/AssetsPerso/Moi/compress/Kouame_Esdras_Jonathan_5.png"
        alt="Kouamé Esdras Jonathan"
        className="w-full sm:h-[276px] h-fit object-cover rounded-2xl"
      />
    ),
    title: "C’est moi.",
    text: "Je suis Esdras Kouamé. Passionné par le depassement des limites que je trouve en la cybersécurité, la GRC, l’IA et la création de solutions qui allient intelligence, stratégie et sécurité. J’aime transformer le complexe en clair, et bâtir des systèmes robustes que l’on peut vraiment comprendre, piloter et améliorer.",
  },
  {
    id: 2,
    img: (
      <img
        src="https://ik.imagekit.io/johnsetsama/BlogKejV1/Article5/couv.jpg?updatedAt=1747755492450"
        alt="Technologies Kouamé Esdras Jonathan"
        className="w-full sm:h-[276px] h-fit object-cover rounded-2xl"
      />
    ),
    title: "Technologies & Outils",
    text: "Entre GRC, DevSecOps, IA et développement, j’utilise un stack moderne me permettant d’être à la fois analytique, créatif et opérationnel.",
  },
  {
    id: 3,
    img: (
      <img
        src="https://ik.imagekit.io/johnsetsama/Portfolio/world.png"
        alt="World Kouamé Esdras Jonathan"
        className="w-full sm:h-[276px] h-fit object-cover rounded-2xl"
      />
    ),
    title: "Travail à distance",
    text: "Je collabore aussi bien en présentiel qu’en remote. Je m’adapte aux équipes, aux environnements et aux méthodologies, tout en conservant précision, rigueur et vision globale.",
  },
  {
    id: 4,
    img: (
      <img
        src="https://ik.imagekit.io/johnsetsama/BlogKejV1/Article3/img2.jpg?updatedAt=1746535638388"
        alt="Cybersécurité Kouamé Esdras Jonathan"
        className="w-full sm:h-[276px] h-fit object-cover rounded-2xl"
      />
    ),
    title: "Cybersécurité & IA",
    text: "Je crois en une cybersécurité et une IA qui amplifient l’humain. Et c’est en Afrique, berceau et futur du monde, que cette vision prend vie; une ère nouvelle, souveraine et audacieuse.",
  },
];

/* ======================================================
   VALEURS PERSONNELLES — VERSION PERSONNALISÉE
   ====================================================== */

const values = [
  {
    icon: Shield,
    title: "Rigueur Méthodologique",
    description:
      "Analyse structurée, prise de décision logique et approche orientée résultats.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence Analytique",
    description:
      "Croisement Cybersécurité + IA pour automatiser, détecter, anticiper et optimiser.",
  },
  {
    icon: Target,
    title: "Vision Stratégique",
    description:
      "Capacité à voir loin, à comprendre l’impact des choix et à orchestrer l’ensemble.",
  },
  {
    icon: Sparkles,
    title: "Créativité Technique",
    description:
      "Trouver des solutions élégantes, modernes, efficaces — sans compliquer la vie.",
  },
];

/* ======================================================
   PARCOURS (inchangé, seulement ajusté au style)
   ====================================================== */

const timeline = [
  {
    year: "2024",
    type: "Certification",
    title: "ISO 27001 Lead Implementer",
    description: "Gestion de la sécurité de l'information & conformité.",
  },
  {
    year: "2023",
    type: "Expérience",
    title: "Consultant Cybersécurité & GRC",
    description: "Audit, analyse de risques, conformité et gouvernance.",
  },
  {
    year: "2022",
    type: "Formation",
    title: "Master en Cybersécurité",
    description: "Sécurité offensive, défensive, blue team & forensics.",
  },
  {
    year: "2021",
    type: "Formation",
    title: "Master en Intelligence Artificielle",
    description: "Machine learning, NLP et automatisation intelligente.",
  },
];

/* ======================================================
   ABOUT COMPONENT
   ====================================================== */

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION TITLE ================= */}
        <SectionReveal className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-purple">À propos</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </SectionReveal>

        {/* ================= CARROUSEL ANIMÉ ================= */}
        <div className="flex min-h-[70vh] items-center justify-center w-full mb-24">
          <div className="relative w-full max-w-4xl flex justify-center items-center">
            {animatedCards.map((card, index) => {
              const position =
                (index - currentIndex + animatedCards.length) %
                animatedCards.length;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: position === 1 ? 1 : 0.3,
                    scale: position === 1 ? 1 : 0.88,
                    x:
                      position === 2
                        ? 320
                        : position === 0
                        ? -320
                        : 0,
                    zIndex: position === 1 ? 20 : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`absolute xl:w-[70%] w-[90%] max-w-lg p-6 bg-gradient-to-br from-[#0D1220]/80 to-[#1a2332]/80 cyber-border rounded-3xl shadow-2xl backdrop-blur-lg text-white text-center transform-gpu ${
                    position === 1 ? "z-20" : "z-0"
                  }`}
                >
                  <div className="mb-4">{card.img}</div>
                  <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#915EFF] to-[#4A90E2] bg-clip-text text-transparent">
                    {card.title}
                  </h2>
                  <p className="text-white/80">{card.text}</p>
                </motion.div>
              );
            })}

            {/* Navigation */}
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + animatedCards.length) % animatedCards.length
                )
              }
              className="absolute z-30 left-1 sm:left-6 top-1/2 -translate-y-1/2 bg-purple-600/70 hover:bg-purple-600 p-3 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % animatedCards.length)
              }
              className="absolute z-30 right-1 sm:right-6 top-1/2 -translate-y-1/2 bg-purple-600/70 hover:bg-purple-600 p-3 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>

        {/* ================= TEXTE DE PRÉSENTATION ================= */}
        <SectionReveal className="max-w-3xl mx-auto text-center mb-24">
          <h3 className="text-3xl font-bold mb-6 text-white glow-cyan">
            Qui je suis vraiment
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Je suis quelqu’un qui aime comprendre avant d’agir, structurer avant
            d’exécuter, analyser avant de décider. Dans mon travail, je veux que
            chaque action ait du sens, une logique, et un impact.  
            <br /><br />
            Ce qui me définit dans la cybersécurité, la GRC et l’IA, ce n’est
            pas seulement la technique : c’est ma capacité à voir l’ensemble,
            comprendre le détail, et connecter les deux pour bâtir quelque chose
            de cohérent, sécurisé et intelligent.
          </p>
        </SectionReveal>

        {/* ================= VALEURS ================= */}
        <StaggerReveal
          staggerDelay={0.08}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <value.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                {value.title}
              </h4>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </StaggerReveal>

        {/* ================= PARCOURS ================= */}
        <SectionReveal className="text-center mb-12">
          <h3 className="text-3xl font-bold">
            <span className="glow-cyan">Parcours</span>
          </h3>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-magenta-500 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.12}>
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-col md:gap-12`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 hover:scale-105 inline-block">
                      <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-semibold mb-2">
                        {item.type}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white text-sm cyber-border">
                      {item.year}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
