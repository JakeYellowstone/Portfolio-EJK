/*================== IMPORT CONSTANTES ==================*/
import { Canvas } from "@react-three/fiber";
import { calculateSizes } from "../constants";
import { styles } from "../style";

/*================== IMPORT COMPONENTS ==================*/
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Moi from "../components/Moi";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            <div className={`w-full h-full gap-5 p-10 ${isMobile ? 'relative' : 'grid grid-cols-3'}`}>
                {/* Partie gauche - Modèle 3D */}
                <div className={`flex justify-center items-center h-full col-span-1 ${isMobile ? 'absolute inset-0 z-0 opacity-50 pointer-events-none' : ''}`}>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} enableRotate={!isMobile} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Moi position-y={-3} scale={3} />
                        </Suspense>
                    </Canvas>
                </div>
                
                {/* Partie droite - Texte */}
                <div className={`flex flex-col justify-center items-start text-left gap-5 sm:p-10 p-5 shadow-2xl shadow-black-200 col-span-2 ${isMobile ? 'relative z-10 justify-center h-screen items-start bg-opacity-80 p-5 rounded-lg' : ''}`}>
                    <div className="flex flex-row items-start gap-5">
                        <div className="flex flex-col justify-center items-center mt-5">
                            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                            <div className="w-1 sm:h-80 h-40 violet-gradient" />
                        </div>
                        <div>
                            <h1 className={`${styles.heroHeadText} text-white`}>
                                Enchanté <span className="waving-hand">👋</span> , Je suis
                                <span className="text-[#915EFF]"> Esdras Jonathan Kouamé</span>
                            </h1>
                            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                                Et c'est mon portfolio d'Ingénieur en Cybersécurité
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
