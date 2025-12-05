import { useState } from 'react';
import { Mail, Linkedin, Github, Download, Send, MapPin, Check } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_embth4p",          // 🔧 Ton service ID
        "template_y779de5",         // 🔧 Ton template ID
        {
          from_name: formData.name,
          to_name: "Esdras Jonathan",
          subject: formData.subject,
          from_email: formData.email,
          to_email: "esdraskj@gmail.com",
          message: formData.message,
        },
        "k_TBNgXnxxqVAM1eD"         // 🔧 Ton public key
      );

      setLoading(false);
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 3000);

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Une erreur est survenue lors de l’envoi du message !");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0A0F1C] to-[#0D1220] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="glow-purple">Contact</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discutons de vos projets en cybersécurité, GRC ou développement
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="cyber-border rounded-lg p-8 bg-gradient-to-br from-[#0D1220] to-[#1a2332]">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message envoyé avec succès !</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0F1C] border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0F1C] border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0F1C] border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0A0F1C] border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Envoi..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">Informations</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:esdraskj@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                      esdraskj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Localisation</p>
                    <p className="text-white">Abidjan, CI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-[#0D1220] to-[#1a2332] hover:card-glow transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">Réseaux Sociaux</h4>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/esdras-jonathan-kouam%C3%A9-70332b27a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                </a>

                <a
                  href="https://tryhackme.com/p/yellowstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 group"
                >
                  <img
                    src="https://tryhackme.com/img/favicon.png"
                    alt="TryHackMe de Kouamé Esdras Jonathan"
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-white group-hover:text-cyan-400 transition-colors">TryHackMe</span>
                </a>

                <a
                  href="https://github.com/JakeYellowstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-purple-400/30 hover:bg-purple-400/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-purple-400 transition-colors">GitHub</span>
                </a>
              </div>
            </div>

            <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-purple-500/10 to-magenta-500/10 border-purple-400/30">
              <h4 className="text-xl font-bold text-white mb-4">Télécharger mon CV</h4>
              <p className="text-gray-400 text-sm mb-4">
                Consultez mon parcours complet et mes expériences
              </p>
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Télécharger CV
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-cyan-400/20 pt-8">
          <p className="text-gray-500 text-sm">
            Portfolio Kouamé Esdras Jonathan © 2025 - Tous droits réservés
          </p>
        </div>
      </div>
    </section>
  );
}
