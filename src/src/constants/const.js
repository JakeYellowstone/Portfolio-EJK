import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../../public/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: "./assets/tech/html.png",
    },
    {
      name: "CSS 3",
      icon: "./assets/tech/css.png",
    },
    {
      name: "JavaScript",
      icon: "./assets/tech/javascript.png",
    },
    {
      name: "Laravel",
      icon: "./assets/tech/laravel.png",
    },
    {
      name: "React JS",
      icon: "./assets/tech/reactjs.png",
    },
    {
      name: "Three JS",
      icon: "./assets/tech/three.png",
    },
    {
      name: "Tailwind CSS",
      icon: "./assets/tech/tailwind.png",
    },
    {
      name: "Flutter",
      icon: "./assets/tech/flutter.png",
    },
    {
      name: "Python",
      icon: "./assets/tech/python.png",
    },
    {
      name: "C++",
      icon: "./assets/tech/c88.png",
    },
    {
      name: "Ghidra",
      icon: "./assets/tech/ghidra.png",
    },
    {
      name: "Metasploit",
      icon: "./assets/tech/metasploit.png",
    },
    {
      name: "Splunk",
      icon: "./assets/tech/splunk.png",
    },
    {
      name: "Wireshark",
      icon: "./assets/tech/wireshark.png",
    },
    {
      name: "TensorFlow",
      icon: "./assets/tech/tensor.png",
    },
    {
      name: "Pytorch",
      icon: "./assets/tech/pytorch.png",
    },
    {
      name: "Terraform",
      icon: "./assets/tech/terraform.png",
    },
    {
      name: "git",
      icon: "./assets/tech/git.png",
    },
  ];
  
  const experiences = [
    {
      title: "Développeur d'application Web et mobile (CDD)",
      company_name: "Schiba Holding – Angré (Groupe ivoirien multisectoriel)",
      icon: './assets/company/schiba.png',
      iconBg: "#E6DEDD",
      date: "Février 2024 - Août 2024",
      points: [
        "Développement et maintenance d'applications web et mobiles avec Laravel et Flutter.",
        "Conception d'interfaces utilisateur réactives et intuitives pour améliorer l'expérience client.",
        "Intégration d'API pour connecter les applications aux systèmes backend.",
        "Collaboration avec les équipes techniques pour optimiser les performances des applications.",
      ],
    },
    {
      title: "Développeur d'application Web et mobile (Stage de perfectionnement)",
      company_name: "Schiba Holding",
      icon: "./assets/company/schiba.png",
      iconBg: "#E6DEDD",
      date: "Décembre 2023 - Décembre 2024",
      points: [
        "Participation à la refonte de solutions logicielles existantes pour les rendre plus performantes.",
        "Développement de fonctionnalités frontend et backend avec Laravel et Bootstrap.",
        "Mise en place de tests automatisés pour garantir la qualité du code.",
        "Documentation technique des projets pour faciliter la maintenance future.",
      ],
    },
    {
      title: "Développeur d'application Web et mobile (Stage École)",
      company_name: "Établissement Multi-Services Soro Zié – Cocody (Filiale BTP de Schiba Holding)",
      icon: "./assets/company/ets.png",
      iconBg: "#E6DEDD",
      date: "Mars 2022 - Septembre 2022",
      points: [
        "Création d'applications web pour la gestion des projets de carburant des véhicules de l'entreprise.",
        "Développement de modules de reporting.",
        "Optimisation des bases de données pour améliorer les temps de réponse des applications.",
        "Support technique pour résoudre les problèmes rencontrés par les utilisateurs finaux.",
      ],
    },
    {
      title: "Développeur d'application Web et mobile",
      company_name: "DIGITAL CI (Intégrateur de solutions digitales)",
      icon: "./assets/company/digit.png",
      iconBg: "#E6DEDD",
      date: "Août 2021 - Octobre 2021",
      points: [
        "Travail en équipe pour la conception et la réalisation de différents projets digitaux",
        "Conception et développement d'applications mobiles cross-platform avec Flutter.",
        "Débogage et correction des erreurs pour assurer la stabilité des applications.",
        "Collaboration avec les designers pour implémenter des seniors utilisateur modernes.",
      ],
    },
    {
      title: "Développeur d'application Web et mobile",
      company_name: "X'TRAORDINAIR (Intégrateur de solutions digitales)",
      icon: "./assets/company/xtrao.png",
      iconBg: "#E6DEDD",
      date: "Juin 2021 - Août 2021",
      points: [
        "Travail en équipe pour la conception et la réalisation d'un CRM pour un hotel",
        "Intégration de bases de données MySQL pour stocker et gérer les données.",
        "Mise en œuvre de fonctionnalités backend avec PHP et Laravel.",
        "Débogage et correction des erreurs pour assurer la stabilité des applications.",
      ],
    },
  ];


  const degrees = [

    {
      title: "Master en Sécurité - Cybersécurité et IA",
      company_name: "INPHB x X-Politech x ENSEA",
      icon: "./assets/ecoles/inp.png",
      iconBg: "#383E56",
      date: "Septembre 2024 - Juin 2026",
      points: [
      ],
    },
    {
      title: "Licence en Systèmes Informatiques et Génie Logiciel",
      company_name: "Ecole Supérieure Africaine des TIC (ESATIC)",
      icon: "./assets/ecoles/esatic.png",
      iconBg: "#E6DEDD",
      date: "Septembre 2019 - Juin 2022",
      points: [
      ],
    },
    {
      title: "Bac Série C",
      company_name: "Lycée Scientifique de Yamoussoukro",
      icon: "./assets/ecoles/lsy.png",
      iconBg: "#E6DEDD",
      date: "Septembre 2016 - Juin 2019",
      points: [
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, degrees };