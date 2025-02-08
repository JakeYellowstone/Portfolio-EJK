import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/tsl'
import Button from '../components/Button';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('esdraskj@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

            <div className='col-span-1 xl:row-span-3 bg-gray-900'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                            Salut, je suis Esdras
                        </p>
                        <p className='grid-subtext'>
                            Avec plus de 2 ans d'expérience, j'ai utilisé ma soif de savoir et mon dynamisme pour explorer le domaine du developpement et ensuite aboutir à la cybersécurité.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3 bg-gray-900'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>
                            Tech Utilisées
                        </p>
                        <p className='grid-subtext'>
                            J'ai performé pendant des années dans le developpement web et mobile me permettant ensuite de me spécialiser dans la cybersécurité. Plus précisemment les normes, conformité, la sécurité defensive, et le developpement sécurisé. 
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
                            backgroundImageUrl={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
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
                        Je vis actuellement à Yamoussoukro, en Côte d'Ivoire. Mais pour les travaux à distance.
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
                            La cybersécurité ne réprésente pas juste un métier pour moi. Mais un moyen de mettre à l'épreuve mon esprit critique dans le domaine de la technologie.
                            Un secteur qui évolue si vite, et passionnant. La cybersécurité me pousse a être à l'affut des dernière technologie et à la maitriser.
                        </p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2 bg-gray-900'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>
                            Me Contacter
                        </p>

                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />

                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                esdraskj@gmail.com
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