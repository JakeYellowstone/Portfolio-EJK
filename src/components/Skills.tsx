import { Shield, Lock, Search, Brain, Code, Database, Network, Terminal } from 'lucide-react';
import SectionReveal from './SectionReveal';

const skillCategories = [
  {
    title: 'GRC & Conformité',
    icon: Shield,
    color: 'cyan',
    skills: [
      { name: 'ISO 27001', level: 75 },
      { name: 'ISO 27005', level: 74 },
      { name: 'Cartographie des risques', level: 73 },
      { name: 'Audit & Conformité', level: 72 },
      { name: 'EBIOS RM', level: 70 },
      { name: 'RGPD', level: 71 },
    ],
  },
  {
    title: 'Cybersécurité',
    icon: Lock,
    color: 'purple',
    skills: [
      { name: 'SIEM (Splunk, ELK)', level: 74 },
      { name: 'EDR & XDR', level: 73 },
      { name: 'IAM & SSO', level: 75 },
      { name: 'Keycloak', level: 70 },
      { name: 'Blue Team', level: 73 },
      { name: 'Analyse de logs', level: 75 },
    ],
  },
  {
    title: 'Forensics & Analyse',
    icon: Search,
    color: 'magenta',
    skills: [
      { name: 'Volatility', level: 70 },
      { name: 'Autopsy', level: 68 },
      { name: 'Wireshark', level: 74 },
      { name: 'Incident Response', level: 72 },
      { name: 'Threat Hunting', level: 71 },
      { name: 'YARA Rules', level: 66 },
    ],
  },
  {
    title: 'Intelligence Artificielle',
    icon: Brain,
    color: 'cyan',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'NLP', level: 72 },
      { name: 'Python (ML)', level: 73 },
      { name: 'PyTorch', level: 67 },
      { name: 'Scikit-learn', level: 72 },
      { name: 'Automatisation IA', level: 74 },
    ],
  },
  {
    title: 'Développement',
    icon: Code,
    color: 'purple',
    skills: [
      { name: 'Java', level: 72 },
      { name: 'Spring Boot', level: 70 },
      { name: 'Python', level: 75 },
      { name: 'React', level: 68 },
      { name: 'Node.js', level: 66 },
      { name: 'TypeScript', level: 69 },
    ],
  },
  {
    title: 'Outils & Technologies',
    icon: Terminal,
    color: 'magenta',
    skills: [
      { name: 'Linux', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Git', level: 72 },
      { name: 'Metasploit', level: 60 },
      { name: 'Burp Suite', level: 62 },
      { name: 'Nmap', level: 71 },
    ],
  },
];


const tools = [
  { name: 'Keycloak', category: 'IAM' },
  { name: 'Splunk', category: 'SIEM' },
  { name: 'ELK Stack', category: 'SIEM' },
  { name: 'Volatility', category: 'Forensics' },
  { name: 'Wireshark', category: 'Network' },
  { name: 'Metasploit', category: 'Pentest' },
  { name: 'Burp Suite', category: 'Pentest' },
  { name: 'Nmap', category: 'Scan' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Python', category: 'Dev' },
  { name: 'Java', category: 'Dev' },
  { name: 'Spring Boot', category: 'Framework' },
  { name: 'React', category: 'Frontend' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'Scikit-learn', category: 'AI' },
];

export default function Skills() {
  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-400 to-cyan-600',
      purple: 'from-purple-400 to-purple-600',
      magenta: 'from-pink-400 to-pink-600',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-purple">Compétences & Outils</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise technique en cybersécurité, GRC et intelligence artificielle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(category.color)}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            <span className="glow-cyan">Stack Technique</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="cyber-border rounded-lg px-4 py-2 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
