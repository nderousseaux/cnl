import HeroCard from '@/src/ui/components/hero-card';
import { team } from '@/src/lib/data';
import { emphasisFont } from '@/src/ui/fonts';

export default function Page() {
  return (
    <main className="grid gap-4
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      justify-arround
    ">
      <HeroCard 
      className="flex flex-col justify-between"
      classNameLayout="md:col-span-3 col-span-2 p-6"
      >
        <h2 className={`text-7xl lg:text-8xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>
          Notre équipe
        </h2>
        <p className="md:text-lg text-md">
          Nous avons le plaisir de vous présenter notre équipe, composée de professionnels passionnés et engagés. Chaque membre de notre équipe apporte son expertise et son savoir-faire pour vous offrir des produits et services de qualité. Découvrez les visages qui se cachent derrière CNL. 
          Notre équipe se compose de 10 membres, chacun ayant un rôle clé dans le développement et la réussite de notre entreprise. Découvrez les visages qui se cachent derrière CNL.
        </p>  
      </HeroCard>
      
      {team.map((member, index) => (
        <HeroCard 
          backgroundImage={member.image} animationDelay={0.2 + index * 0.2}
          className="flex flex-col justify-end min-h-48 aspect-[3/4]"
          classNameLayout="col-span-1 row-span-1"
          key={index}
        >
          <h2 className={`text-3xl md:text-5xl font-bold ${emphasisFont.className} relative z-10 text-white`}>{member.name}</h2>
          <h2 className={`text-lg md:text-2xl font-bold ${emphasisFont.className} relative z-10 text-white`}>#{member.poste}</h2>
        </HeroCard>
      ))}
    </main>
  );
}
