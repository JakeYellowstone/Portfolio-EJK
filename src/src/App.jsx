/*================== IMPORT REACT ==================*/
import { useEffect, useRef, useState } from "react";

/*================== IMPORT MOTION ==================*/
import { motion } from "framer-motion";
import AnimationCards from "./sections/AnimationCards";
import FadeScrollSection from "./components/FadeScrollSection";

/*================== IMPORT COMPOSANT ==================*/
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experiences from "./sections/Experiences";
import Preloader from "./components/Preloader";

const App = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowScrollIndicator(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5, // dès que 10% du footer est visible
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <main className="w-full h-screen">
            {<Preloader />}

            <FadeScrollSection>
                <AnimationCards />
            </FadeScrollSection>

            <FadeScrollSection>
                <About />
            </FadeScrollSection>

            <FadeScrollSection>
                <Projects />
            </FadeScrollSection>

            <Experiences />

            <FadeScrollSection>
                <Contact />
            </FadeScrollSection>

            <div ref={footerRef}>
                <Footer />
            </div>

            {showScrollIndicator && (
                <div className="fixed xs:bottom-10 bottom-15 w-full flex justify-center items-center">
                    <a href="#about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary border-white flex justify-center items-start p-2">
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
                            />
                        </div>
                    </a>
                </div>
            )}
        </main>
    );
};

export default App;
