import { Shield, FileCheck, Lock, Brain, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Audit de Sécurité',
    description: 'Évaluation complète de votre posture de sécurité et identification des vulnérabilités',
    features: [
      'Audit technique et organisationnel',
      'Tests d\'intrusion (pentest)',
      'Revue de configuration',
      'Rapport détaillé avec recommandations',
    ],
    color: 'cyan',
  },
  {
    icon: Shield,
    title: 'GRC & Conformité',
    description: 'Accompagnement dans la gouvernance, gestion des risques et mise en conformité',
    features: [
      'Certification ISO 27001/27005',
      'Cartographie des risques cyber',
      'Plans de traitement des risques',
      'Politique de sécurité et procédures',
    ],
    color: 'purple',
  },
  {
    icon: Lock,
    title: 'IAM & Keycloak',
    description: 'Déploiement et configuration de solutions d\'Identity and Access Management',
    features: [
      'Architecture IAM sécurisée',
      'SSO et authentification unifiée',
      'Intégration OAuth2/OIDC',
      'Gestion des rôles et permissions',
    ],
    color: 'magenta',
  },
  {
    icon: Code,
    title: 'Développement Sécurisé',
    description: 'Création d\'applications web sécurisées et outils de cybersécurité sur mesure',
    features: [
      'Applications full-stack sécurisées',
      'Intégration DevSecOps',
      'Code review et sécurité',
      'API REST sécurisées',
    ],
    color: 'cyan',
  },
  {
    icon: Brain,
    title: 'Automatisation IA',
    description: 'Intelligence artificielle appliquée à la cybersécurité pour automatiser vos processus',
    features: [
      'Détection d\'anomalies par ML',
      'Analyse automatique de vulnérabilités',
      'Automatisation des audits',
      'Threat intelligence augmentée',
    ],
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Incident Response',
    description: 'Intervention rapide et forensics en cas d\'incident de sécurité',
    features: [
      'Analyse forensic approfondie',
      'Investigation numérique',
      'Éradication et récupération',
      'Rapport d\'incident détaillé',
    ],
    color: 'magenta',
  },
];

export default function Services() {
  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-400/30',
        bg: 'from-cyan-400/10 to-cyan-600/10',
        text: 'text-cyan-400',
        glow: 'group-hover:shadow-cyan-500/30',
      },
      purple: {
        border: 'border-purple-400/30',
        bg: 'from-purple-400/10 to-purple-600/10',
        text: 'text-purple-400',
        glow: 'group-hover:shadow-purple-500/30',
      },
      magenta: {
        border: 'border-pink-400/30',
        bg: 'from-pink-400/10 to-pink-600/10',
        text: 'text-pink-400',
        glow: 'group-hover:shadow-pink-500/30',
      },
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-cyan">Mes Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solutions sur mesure en cybersécurité, GRC et développement sécurisé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 hover:-translate-y-2 group ${colorClasses.glow}`}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorClasses.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${colorClasses.text}`} />
                </div>

                <h3 className={`text-2xl font-bold text-white mb-3 group-hover:${colorClasses.text} transition-colors`}>
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.text} mt-2 flex-shrink-0`}></div>
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-lg border ${colorClasses.border} ${colorClasses.text} hover:bg-gradient-to-r ${colorClasses.bg} transition-all duration-300 flex items-center justify-center gap-2 font-medium`}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="cyber-border rounded-lg p-8 bg-gradient-to-br from-[#0D1220] to-[#1a2332] max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Besoin d'un projet sur mesure ?</h3>
            <p className="text-gray-400 mb-6">
              Discutons de vos besoins spécifiques en cybersécurité, GRC ou développement sécurisé.
              Je propose des solutions adaptées à votre contexte et vos enjeux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Demander un audit
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 cyber-border bg-transparent text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                Prendre contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
