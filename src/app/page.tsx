import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import HeroCard from "@/src/ui/components/hero-card";
import Button from "@/src/ui/components/button";
import { emphasisFont } from "@/src/ui/fonts";

// Root page
export default function Page() {
  
  return (
    <main className="flex-grow grid grid-cols-4 grid-rows-3 gap-4">
      <HeroCard colSpan={2} rowSpan={2} className="p-6 flex flex-col justify-between">
        <h2 className={`text-8xl font-bold ${emphasisFont.className} tracking-tighter`}>
          La technologie au service du bien être animal
        </h2>
        <p className="text-lg">
          Le collier CNL est un produit qui vise à répondre aux besoins des propriétaires sur la santé physique et mentale de leur animal de compagnie pendant leur absence. L’objectif est d’offrir aux propriétaires grâce à une technologie connectée et un suivi personnalisé, une solution innovante et évolutive  pour assurer le bien-être de leur animal. Le collier, connecté et doté d’une caméra intelligente permet une surveillance en temps réel de la santé et du comportement de leur animal.
        </p>
      </HeroCard>
      <HeroCard colSpan={2} rowSpan={3} backgroundImage="/assets/product.jpg" className="flex justify-end items-end gap-4">
        <Button href="/produit" text="Notre produit" Icon={ArrowRightIcon} />
        <Button href="/contact" text="Contact" Icon={EnvelopeIcon} type="secondary"/>
      </HeroCard>
      <HeroCard className="flex flex-col justify-end" backgroundImage="/assets/team.jpg" href="/equipe">
        <h2 className={`text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>
          #team
        </h2>
      </HeroCard>
      <HeroCard className="flex flex-col justify-end" backgroundImage="/assets/green.jpg" href="/valeurs">
        <h2 className={`text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>
          #green
        </h2>
      </HeroCard>
    </main>
  );
}
