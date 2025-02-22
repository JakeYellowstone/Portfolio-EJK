import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeScrollSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permet l'animation à chaque scroll
    threshold: 0.4, // L'animation commence quand 40% de la section est visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }} // L'élément est petit et en bas
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
        scale: inView ? 1 : 0.95,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }} // Animation plus lente
      className="w-full" // Pour occuper toute la largeur
    >
      {children}
    </motion.div>
  );
};

export default FadeScrollSection;
