import Hero from '../components/Hero'


export default function AnimatedCards() {

  return (
    <section className="flex min-h-screen">
      {/* Partie gauche (autre contenu) */}
      <div className="w-full justify-center flex">
        <Hero />
      </div>

      
    </section>
  );
}
