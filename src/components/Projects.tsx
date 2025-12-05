import { useState } from 'react';
import { ExternalLink, Github, Shield, FileCheck, Search, Brain, Code, Sparkles, Calendar, Users, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const categories = ['Tous', 'GRC', 'Audit Sécurité', 'Forensics', 'IA', 'Développement'];

const projects = [
  {
    id: 1,
    title: 'Réalisation complète d’un SMSI – GLANI S.A',
    category: 'GRC & Cybersécurité',
    description: 'Conception d’un Système de Management de la Sécurité de l’Information (SMSI) pour une entreprise cacao opérant sur 9 sites.',
    image: Shield,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/SMSI.png',
    tags: ['ISO 27001', 'GRC', 'Analyse de risques', 'Sécurité organisationnelle', 'EBIOS'],
    year: '2025',
    duration: '3 mois',
    team: 'Individuel',
    details: {
      context: "GLANI S.A, opérant sur 9 sites de la chaîne de valeur du cacao, souhaitait structurer sa sécurité et renforcer sa gouvernance pour réduire les risques opérationnels et financiers liés à son expansion.",

      problem: "Absence de gouvernance SSI, responsabilités floues, risques non maîtrisés et aucune politique ou procédure formalisée — situation générant des pertes potentielles et une exposition élevée aux incidents coûteux.",

      approach: "Conception complète d’un SMSI : analyses EBIOS, politiques SSI, procédures, cartographie, traitement des risques, plan d’audit et tableaux de bord pour une gouvernance claire et mesurable.",

      methodology: "Alignement ISO 27001:2022, gestion documentaire, matrices RACI, classification des actifs, continuité d’activité et scénarios de risques pour structurer l’entreprise sur l’ensemble des 9 sites.",

      result: "Un SMSI complet, cohérent et opérationnel, offrant une vision consolidée, une gouvernance clarifiée et une réduction immédiate de l’exposition aux risques majeurs.",

      impact: [
        "La mise en place du SMSI permet une réduction estimée de 25 à 40% des pertes liées aux incidents internes",
        "Une économie potentielle annuelle de centaine de millions grâce à la maîtrise des risques, à la continuité d’activité optimisée et à la clarification des responsabilités.",
        "Une baisse des coûts de non-conformité",
        "Structure complète du SMSI",
        "Vision globale consolidée sur 9 sites",
        "Réduction des risques organisationnels",
        "Documentation standardisée et audit-ready",
      ],

      tech: ['ISO 27001', 'ISO 27005', 'EBIOS RM', 'GRC Toolkit'],
    },
    code: "https://github.com/JakeYellowstone/SMSI_Glani",
    site: "#",
  },
  {
    id: 2,
    title: 'Kolander — IA de classification & priorisation d’alertes EDR',
    category: 'Cybersécurité & IA',
    description: 'Système intelligent filtrant les faux positifs et classant les alertes critiques d’un EDR.',
    image: Brain,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/kolander.png?updatedAt=1764711917232',
    tags: ['IA', 'EDR', 'Alerting', 'Machine Learning', 'Automation'],
    year: '2025',
    duration: '1 mois',
    team: '2',
    details: {
      context: "Les équipes SOC étaient saturées par un flux d’alertes peu pertinentes, provoquant une perte de temps, une hausse des coûts internes et un risque accru d'incidents réels non détectés.",

      problem: "45% de faux positifs quotidiens : tri manuel lent, charge analyste élevée, et plusieurs heures perdues chaque semaine.",

      approach: "Mise en place d’un modèle ML supervisé pour classifier automatiquement les alertes, attribuer un score de priorité et filtrer le bruit.",

      methodology: "Feature engineering, normalisation des logs, modèle RandomForest optimisé via GridSearch et intégré dans un pipeline automatisé.",

      result: "60% de faux positifs éliminés et un tri des alertes critiques nettement plus rapide.",

      impact: [
        "60% de faux positifs éliminés",
        "Priorisation automatique",
        "Efficacité SOC améliorée",
      ],

      tech: ["Python", "Scikit-learn", "Pandas", "FastAPI"],

      financial_benefit: "En réduisant le tri manuel, l’entreprise économise plus de 120 000$ par an en charge analyste et réduit considérablement le risque d’incidents coûteux."
    },
    code: "https://github.com/JakeYellowstone/kolander",
    site: "#",
  },
  {
    id: 3,
    title: 'Analyse & documentation d’une attaque Pass-the-Hash',
    category: 'Forensics & Sécurité',
    description: 'Simulation, analyse et documentation complète d’une attaque Pass-the-Hash sur Windows 10.',
    image: Search,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/pass_tthe_hack.png',
    tags: ['Forensics', 'Windows Security', 'PT-H', 'Pentest'],
    year: '2025',
    duration: '1 mois',
    team: '2',
    details: {
      context: 'Besoin de comprendre en profondeur les méthodes d’élévation de privilèges et mouvements latéraux.',
      problem: 'Attaque difficile à détecter avec des outils traditionnels et logs souvent insuffisants.',
      approach: 'Mise en place d’un lab Windows, exécution contrôlée de l’attaque, capture mémoire, analyse artefacts.',
      methodology: 'Volatility, Mimikatz, supervision des logs, analyse hash NTLM et sessions.',
      result: 'Documentation professionnelle, reproductible et utile pour la formation des analystes.',
      impact: [
        'Compréhension renforcée des attaques Windows',
        'Documentation structurée et pédagogique'
      ],
      tech: ['Volatility', 'Windows 10', 'Mimikatz'],
    },
    code: "https://inphb-my.sharepoint.com/:b:/g/personal/esdras_kouame24_inphb_ci/IQDgnzlqUrB8TaMgQh94BWUxAY197ULeY50GE4BTtywtDZM?e=wNzxsj",
    site: "#",
  },
  {
    id: 4,
    title: 'Emap — Gestion sécurisée des matériels d’entreprise',
    category: 'Développement & Sécurité',
    description: 'Application web sécurisée pour la gestion du matériel, incluant traçabilité et IAM.',
    image: Code,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/emap.png?updatedAt=1764711949126',
    tags: ['Angular', 'Spring Boot', 'Keycloak', 'IAM', 'Security'],
    year: '2025',
    duration: '2 mois',
    team: 'Individuel',
    details: {
      context: 'Les entreprises manquent souvent d’un outil centralisé pour gérer et tracer leur matériel.',
      problem: 'Données dispersées, accès non contrôlés, absence de traçabilité.',
      approach: 'Application Angular + Spring Boot, IAM Keycloak, contrôle RBAC, journalisation avancée.',
      methodology: 'Architecture modulaire, API sécurisée, tests unitaires.',
      result: 'Gestion fluide, accès maîtrisés, meilleure visibilité des équipements.',
      impact: [
        'Traçabilité complète',
        'Sécurité renforcée via IAM',
        'Optimisation opérationnelle'
      ],
      tech: ['Angular', 'Spring Boot', 'Keycloak', 'MySql'],
    },
    code: "https://github.com/JakeYellowstone/EMAP",
    site: "#",
  },
  {
    id: 5,
    title: 'Eilorhub — Blog technique cybersécurité & IA',
    category: 'Web & Contenu Technique',
    description: 'Plateforme moderne dédiée aux articles techniques en cybersécurité et IA.',
    image: Code,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/eilor_hub.png',
    tags: ['React', 'TypeScript', 'SEO', 'Blog'],
    year: '2025',
    duration: '3 semaines',
    team: 'Individuel',
    details: {
      context: 'Besoin de partager des connaissances techniques de manière accessible.',
      problem: 'Manque d’espace dédié à la vulgarisation cyber & IA.',
      approach: 'Création d’un blog futuriste, animations douces, structure claire.',
      result: 'Plateforme professionnelle et esthétique.',
      impact: ['Amélioration du partage de connaissances'],
      tech: ['React', 'TypeScript'],
    },
    code: "#",
    site: "https://sciahub.eilor.ci/",
  },
  {
    id: 6,
    title: 'Elior Site — Présentation d’un mouvement futuriste',
    category: 'Web & Création',
    description: 'Site web immersif présentant le mouvement Eilor.',
    image: Code,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/eilor_site.png',
    tags: ['React', 'TypeScript', 'Animations'],
    year: '2025',
    duration: '2 semaines',
    team: 'Individuel',
    details: {
      context: 'Créer un site artistique futuriste et inspirant.',
      problem: 'Besoin d’une identité visuelle forte et d’une expérience fluide.',
      approach: 'Animations futuristes, design épuré, pages thématiques.',
      result: 'Immersion visuelle et cohérence narrative.',
      impact: ['Amélioration image & visibilité'],
      tech: ['React', 'TypeScript'],
    },
    code: "#",
    site: "https://eilor.ci/",
  },
  {
    id: 9,
    title: 'Système de recommandation & achats',
    category: 'IA & Data',
    description: 'Modèle de recommandation basé sur un réseau de neurones.',
    image: Brain,
    coverImage: 'https://ik.imagekit.io/johnsetsama/Portfolio/Projets/PyTorch.png',
    tags: ['Deep Learning', 'Recommandation', 'Python'],
    year: '2021',
    duration: '1 mois',
    team: '4',
    details: {
      context: 'Besoin d’un système intelligent pour recommander des produits.',
      problem: 'Faible pertinence des recommandations existantes.',
      approach: 'Modèle neuronal (MLP), vectorisation, entraînement sur dataset.',
      result: 'Recommandations plus précises.',
      impact: ['Amélioration UX'],
      tech: ['Python', 'PyTorch'],
    },
    code: "#",
    site: "#",
  },
];

function ProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? {
      hidden: { opacity: 1, scale: 1 },
      visible: { opacity: 1, scale: 1 },
    }
    : {
      hidden: { opacity: 0, scale: 0.95, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.45,
          delay: (index % 3) * 0.08,
          ease: [0.22, 0.9, 0.28, 1],
        },
      },
    };

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      whileHover={prefersReducedMotion ? {} : { y: -8 }}
      onClick={onClick}
      className="cyber-border rounded-2xl overflow-hidden bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 cursor-pointer group"
      style={{ willChange: 'transform' }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1220]" />
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-400/10 backdrop-blur-sm cyber-border rounded-full">
          <span className="text-cyan-400 text-xs font-semibold">{project.year}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <project.image className="w-5 h-5 text-cyan-400" />
          <span className="text-purple-400 text-sm font-medium">{project.category}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs font-medium">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{project.team}</span>
            </div>
          </div>
          <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen py-8 px-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 0.9, 0.28, 1] }}
          className="max-w-5xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-96 rounded-2xl overflow-hidden mb-8"
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm cyber-border flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-4">
                  <project.image className="w-8 h-8 text-cyan-400" />
                  <span className="px-4 py-1 bg-purple-400/20 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
            </motion.div>

            <div className="cyber-border rounded-2xl bg-gradient-to-br from-[#0D1220] to-[#1a2332] p-8 mb-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 cyber-border rounded-lg bg-cyan-400/5">
                  <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{project.duration}</div>
                  <div className="text-xs text-gray-400">Durée</div>
                </div>
                <div className="text-center p-4 cyber-border rounded-lg bg-purple-400/5">
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{project.team}</div>
                  <div className="text-xs text-gray-400">Équipe</div>
                </div>
                <div className="text-center p-4 cyber-border rounded-lg bg-green-400/5">
                  <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{project.year}</div>
                  <div className="text-xs text-gray-400">Année</div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-cyan-400 rounded" />
                    Contexte
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.details.context}</p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-cyan-400 rounded" />
                    Problématique
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{project.details.problem}</p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-cyan-400 rounded" />
                    Approche & Solutions
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.details.approach}</p>
                  {project.details.methodology && (
                    <div className="p-4 bg-purple-400/10 cyber-border rounded-lg">
                      <div className="text-purple-400 font-semibold mb-2">Méthodologie</div>
                      <p className="text-gray-300 text-sm">{project.details.methodology}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-cyan-400 rounded" />
                    Résultats
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.details.result}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {project.details.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 cyber-border rounded-lg bg-green-400/5 hover:bg-green-400/10 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold text-xl mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-cyan-400 rounded" />
                    Technologies & Outils
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.details.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 cyber-border bg-cyan-400/5 text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-400/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-8 mt-8 border-t border-cyan-400/20">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 active:scale-95"
                >
                  <Github className="w-5 h-5" />
                  Voir le code
                </a>

                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 cyber-border bg-transparent text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="w-5 h-5" />
                  Démo en ligne
                </a>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#0A0F1C] to-[#0D1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-cyan">Mes Réalisations</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Projets en cybersécurité, GRC, forensics et intelligence artificielle.
            De l'audit ISO 27001 à l'IA appliquée à la sécurité, découvrez mes réalisations concrètes.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${selectedCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                : 'cyber-border bg-transparent text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
