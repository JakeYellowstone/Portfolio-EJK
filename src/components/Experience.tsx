import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
  type: 'work',
  title: 'Développeur d’Applications Web & Mobile',
  organization: 'Schiba Holding – Angré',
  period: 'Février 2024 - Août 2024',
  description: 'Développement et maintenance d’applications web et mobiles avec Laravel et Flutter.',
  achievements: [
    'Développement et optimisation d’applications web et mobiles',
    'Conception d’interfaces utilisateur réactives et intuitives',
    'Intégration d’API pour connecter les applications aux systèmes backend',
    'Collaboration avec les équipes techniques pour améliorer les performances applicatives'
  ],
},

{
  type: 'work',
  title: 'Développeur d’Applications Web & Mobile',
  organization: 'Schiba Holding',
  period: 'Décembre 2022 - Décembre 2023',
  description: 'Refonte et optimisation de solutions logicielles existantes avec Laravel et Bootstrap.',
  achievements: [
    'Participation à la refonte de solutions logicielles pour améliorer leurs performances',
    'Développement de fonctionnalités backend et frontend',
    'Mise en place de tests automatisés pour renforcer la qualité du code',
    'Rédaction de documentation technique pour faciliter la maintenance'
  ],
},

{
  type: 'work',
  title: 'Développeur d’Applications Web & Mobile',
  organization: 'Établissement Multi-Services Soro Zié – Cocody',
  period: 'Mars 2022 - Septembre 2022',
  description: 'Développement d’une application web pour la gestion des projets carburant et reporting.',
  achievements: [
    'Création d’applications web pour gérer les projets carburant',
    'Développement de modules de reporting interactif',
    'Optimisation des bases de données pour réduire les temps de réponse',
    'Assistance technique aux utilisateurs finaux'
  ],
},

{
  type: 'work',
  title: 'Développeur d’Applications Web & Mobile',
  organization: 'DIGITAL CI',
  period: 'Août 2021 - Octobre 2021',
  description: 'Conception et réalisation de projets digitaux avec Flutter et technologies web.',
  achievements: [
    'Développement d’applications mobiles cross-platform avec Flutter',
    'Débogage et correction d’erreurs pour assurer la stabilité des applications',
    'Collaboration avec les designers pour implémenter des interfaces modernes',
    'Participation active à différents projets digitaux en équipe'
  ],
},

{
  type: 'work',
  title: 'Développeur d’Applications Web & Mobile',
  organization: 'X’TRAORDINAIR',
  period: 'Juin 2021 - Août 2021',
  description: 'Développement d’un CRM pour un hôtel avec Laravel, PHP et MySQL.',
  achievements: [
    'Conception et développement d’un CRM pour la gestion hôtelière',
    'Intégration et gestion de base de données MySQL',
    'Développement de fonctionnalités backend avec PHP/Laravel',
    'Débogage et optimisation pour garantir la stabilité du système'
  ],
},
];
const certifications = [
  {
    name: 'Security Engineer',
    issuer: 'Try Hack Me',
    year: '2025',
    icon: Award,
  },
  {
    name: 'Cyber Security 101',
    issuer: 'Try Hack Me',
    year: '2025',
    icon: Award,
  },
  {
    name: 'Pre Security',
    issuer: 'Try Hack Me',
    year: '2025',
    icon: Award,
  },
  {
    name: 'HackfinityBattle',
    issuer: 'Try Hack Me',
    year: '2025',
    icon: Award,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0D1220] to-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-cyan">Parcours Professionnel</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expériences et formations en cybersécurité, GRC et intelligence artificielle
          </p>
        </div>

        <div className="relative mb-20">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-magenta-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8">
                <div className="hidden md:flex items-start">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center cyber-border">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-8 h-8 text-white" />
                      ) : (
                        <GraduationCap className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                        exp.type === 'work'
                          ? 'bg-cyan-400/10 text-cyan-400'
                          : 'bg-purple-400/10 text-purple-400'
                      }`}>
                        {exp.type === 'work' ? 'Expérience' : 'Formation'}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium">{exp.organization}</p>
                    </div>
                    <span className="px-4 py-2 cyber-border bg-cyan-400/5 text-cyan-300 rounded-lg font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-400 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            <span className="glow-purple">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
