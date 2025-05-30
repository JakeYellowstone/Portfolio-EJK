import React, { useState } from "react";
import { myProjects } from "../constants";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    const lastIndex = myProjects.length - 1;
    if (direction === "previous") {
      setSelectedProjectIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
    } else {
      setSelectedProjectIndex((prev) =>
        prev === lastIndex ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="min-h-screen w-full py-20 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-[90%] max-w-7xl">
        {/* Left: Details Card */}
        <div className="bg-[#210f47] rounded-3xl p-8 shadow-xl backdrop-blur-lg border border-white/10 relative transition-all duration-300 ease-in-out">

          <div className="text-white space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text">
              {currentProject.title}
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              {currentProject.desc}
            </p>

            <p className="text-sm text-gray-400 italic">
              {currentProject.subdesc}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {currentProject.tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="w-8 h-8 object-contain bg-white/10 p-1 rounded-lg"
                />
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              {currentProject.href !== "#" ? (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Voir Live du Projet
                  <img
                    src="./assets/arrow-up.png"
                    alt="arrow"
                    className="w-3 h-3"
                  />
                </a>
              ) : (
                <div /> // pour garder l'espace
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => handleNavigation("previous")}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <img
                    src="./assets/left-arrow.png"
                    alt="Précédent"
                    className="w-4 h-4"
                  />
                </button>
                <button
                  onClick={() => handleNavigation("next")}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="Suivant"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Video Preview */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative bg-[#14121f]">
          <img
            src={
              currentProject.texture || "./textures/project/project1.mp4"
            }
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
