import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/tsl'
import Button from '../components/Button';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const [hasCopied1, setHasCopied1] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('esdraskj@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    const handleCopy1 = () => {
        navigator.clipboard.writeText('0100548605');

        setHasCopied1(true);

        setTimeout(() => {
            setHasCopied1(false);
        }, 2000)
    }

  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

            <div className='col-span-1 xl:row-span-3 bg-gray-900'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                            Bonjour, Je m'appelle Esdras Jonathan Kouamé
                        </p>
                        <p className='grid-subtext'>
                        De base, un développeur web et mobile passionné, actuellement en Côte d'Ivoire. À 24 ans, je combine une solide expérience en développement d'applications web et mobiles avec une expertise pointue en cybersécurité et intelligence artificielle, renforcée par mon master dans ce domaine. Mon objectif est de créer des solutions numériques innovantes, sécurisées et intelligentes, tout en répondant aux besoins spécifiques de mes clients. Que vous cherchiez à développer une application, sécuriser vos systèmes ou intégrer des solutions d'IA, je suis là pour vous accompagner.
                        </p>
                    </div>
                </div>
            </div>
            

            <div className='col-span-1 xl:row-span-3 bg-gray-900'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>
                            Technologie utilisée
                        </p>
                        <p className='grid-subtext'>
                        Je maîtrise des technologies modernes pour le développement web, mobile, la cybersécurité et l'intelligence artificielle. Mes outils incluent React et Three.js pour des interfaces dynamiques, Python pour le backend et l'IA, ainsi que Metasploit, Nessus et Wireshark pour la cybersécurité. J'utilise également TensorFlow et PyTorch pour des solutions d'IA innovantes. Mon objectif est de combiner performance, sécurité et intelligence dans chaque projet. 
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4 bg-gray-900'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            /*
                            labelsData={[{
                                lat: 6.885114662187284, long: -5.2256781055492665,
                                text : "Je suis ici !",
                                color : 'white',
                                size : 20,
                            }]}
                                */
                        />
                    </div>
                    <p className='grid-headtext'>
                        Je travaille à distance aussi.
                    </p>
                    <p className='grid-subtext'>
                        En tant que freelance, je propose mes services en développement web, mobile, cybersécurité et intelligence artificielle, avec la possibilité de travailler à distance partout dans le monde. Grâce à une communication fluide et des outils collaboratifs modernes, je m'adapte à vos besoins et à votre fuseau horaire pour livrer des projets de qualité, où que vous soyez. Que vous soyez en Côte d'Ivoire, en Europe, en Amérique ou ailleurs, je suis prêt à collaborer avec vous pour concrétiser vos idées.
                    </p>
                    <Button name="Me Contacter" isBeam containerClass="w-full mt-10"/>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3 bg-gray-900'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                        Ma passion pour la cybersécurité
                        </p>
                        <p className='grid-subtext'>
                        La cybersécurité et l'intelligence artificielle sont au cœur de ma passion pour la technologie. Mon master en Cybersécurité et IA m'a permis d'acquérir une expertise approfondie dans la protection des systèmes et des données, ainsi que dans le développement de solutions d'IA innovantes. Je suis constamment à l'affût des dernières tendances et techniques pour garantir que les solutions que je développe soient non seulement performantes, mais aussi intelligentes et sécurisées. Pour moi, la cybersécurité et l'IA ne sont pas juste des compétences, ce sont des missions : protéger vos projets, optimiser vos processus et offrir des expériences utilisateur exceptionnelles.
                        </p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2 bg-gray-900'>
                <div className='grid-container'>

                    <div className='space-y-2'>
                        <p className='grid-headtext text-center'>
                            Me contacter
                        </p>
                        <p className='grid-subtext text-center'>
                        Apoureux de Dieu, passioné de conception, de nouvelles technologies et de l'évolution,aussi mon amour pour la lecture (prinicipalement de la poésie) et l'écriture m'a permis d'avoir une vision poétique néanmoins réaliste de la société.
                        Ainsi que membre active de l'Eglise Vases d'Honneur Centre de la Foi Treichville le monitariat à l'Ecodim (encadrement des enfants de 3 à 5 ans) et quelque responsabilités à Bloom CDF. 
                        </p>

                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />

                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                esdraskj@gmail.com
                            </p>
                        </div>
                        <div className='copy-container' onClick={handleCopy1}>
                            <img src={hasCopied1 ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />

                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                0100548605
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About