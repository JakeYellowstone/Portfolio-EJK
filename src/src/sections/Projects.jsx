import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="min-h-screen w-full py-20 flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-[95%] max-w-7xl">
        
        {/* Left: Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-[#210f47]/90 rounded-3xl p-8 shadow-xl backdrop-blur-lg border border-white/10 relative"
          >
            <div className="text-white space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#915EFF] to-[#4A90E2] text-transparent bg-clip-text">
                {currentProject.title}
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                {currentProject.desc}
              </p>

              <p className="text-sm text-gray-400 italic">
                {currentProject.subdesc}
              </p>



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
                  <div />
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

              {/* Dots navigation */}
              <div className="flex gap-2 mt-6 justify-center lg:justify-start">
                {myProjects.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === selectedProjectIndex
                        ? "bg-[#915EFF]"
                        : "bg-white/30"
                    }`}
                    animate={{
                      scale: idx === selectedProjectIndex ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right: Video/Image Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.texture}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative bg-[#14121f] flex items-center justify-center"
          >
            {currentProject.texture.endsWith(".mp4") ? (
              <video
                src={currentProject.texture}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={currentProject.texture}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
