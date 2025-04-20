import { ArrowRightIcon, EnvelopeIcon, EnvelopeOpenIcon} from "@heroicons/react/24/outline";

import HeroCard from "@/src/ui/components/hero-card";
import Button from "@/src/ui/components/button";
import { emphasisFont } from "@/src/ui/fonts";

// Root page
export default function Page() {
  
  return (
    <main className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-4 flex-grow min-h-[calc(100vh-8rem)]">

      <HeroCard 
        className="flex flex-col justify-between"
        classNameLayout="col-span-2 lg:row-span-2 p-6"
      >
        <h2 className={`text-6xl md:text-7xl 2xl:text-8xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>
          La technologie au service du bien être animal
        </h2>
        <p className="xl:text-lg text-md">
          Le collier CNL est un produit qui vise à répondre aux besoins des propriétaires sur la santé physique et mentale de leur animal de compagnie pendant leur absence. L’objectif est d’offrir aux propriétaires grâce à une technologie connectée et un suivi personnalisé, une solution innovante et évolutive  pour assurer le bien-être de leur animal. Le collier, connecté et doté d’une caméra intelligente permet une surveillance en temps réel de la santé et du comportement de leur animal.
        </p>
      </HeroCard>

      <HeroCard 
        backgroundImage="/assets/product.jpg"
        className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-end items-end gap-4 min-h-96"
        classNameLayout="col-span-2 row-span-2 lg:row-span-3"
        animationDelay={0.2}
      >
        <Button href="/produit" text="Notre produit" Icon={ArrowRightIcon} />
        <Button href="/contact" text="Contact" Icon={EnvelopeIcon} SecondaryIcon={EnvelopeOpenIcon} type="secondary"/>
      </HeroCard>

      <HeroCard 
        backgroundImage="/assets/team.jpg" href="/equipe" animationDelay={0.4}
        className="flex flex-col justify-end min-h-48"
        classNameLayout="col-span-1 row-span-1"
      >
        <h2 className={`text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>
          #team
        </h2>
      </HeroCard>

      <HeroCard 
        backgroundImage="/assets/green.jpg" href="/valeurs" animationDelay={0.6}
        className="flex flex-col justify-end min-h-48"
        classNameLayout="col-span-1 row-span-1"
      >
        <h2 className={`text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>
          #green
        </h2>
      </HeroCard>
    </main>
  );
}
