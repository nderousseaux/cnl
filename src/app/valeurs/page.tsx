'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

import Button from '@/src/ui/components/button';
import HeroCard from '@/src/ui/components/hero-card';
import { values } from '@/src/lib/data';
import { emphasisFont } from '@/src/ui/fonts';

export default function Page() {

  return (
    <main className="grid gap-4 
      grid-cols-1
      lg:grid-cols-2
      xl:grid-cols-3
      justify-around
    ">

      <HeroCard
        className="flex flex-col justify-between"
        classNameLayout="xl:col-span-3 lg:col-span-2 col-span-1"
      >
        <h2 className={`text-6xl md:text-7xl 2xl:text-8xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>
          Nos valeurs
        </h2>
        <p className="text-lg">
          Chez nous, l&apos;innovation, l&apos;intégrité et la collaboration sont au cœur de tout ce que nous faisons. Nous croyons fermement que chaque défi est une opportunité de croissance et d&apos;apprentissage. Notre équipe est dédiée à fournir des solutions de haute qualité tout en respectant les normes éthiques les plus élevées. Ensemble, nous travaillons pour créer un impact positif et durable dans notre communauté et au-delà.
        </p>
      </HeroCard>

      {values.map((valeur, index) => (
        <HeroCard
          className="flex flex-col justify-center items-center" animationDelay={0.2 + index * 0.2}
          classNameLayout="bg-gray-200 col-span-1 row-span-1"
          key={index}
        >
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
              {valeur.icon}
            </div>
            <h2 className={`text-3xl font-bold ${emphasisFont.className} mt-4 text-center`}>
              {valeur.title}
            </h2>
            <p className="text-lg text-center">
              {valeur.description}
            </p>
          </div>
        </HeroCard>
      ))}

      <HeroCard
        className="flex justify-between flex-col xl:flex-row" animationDelay={0.2 + values.length * 0.2}
        classNameLayout="xl:col-span-3 lg:col-span-2 col-span-1 bg-gray-100 p-6 rounded-3xl justify-between gap-40 bg-fuchsia-100"
      >
        <div className="flex flex-col gap-4 text-left text-xl pb-4 pr-24">
          <h2 className={`text-7xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>Nos engagement envers les animaux et la planète</h2>
          <p className="text-lg">
            Chaque année, nous consacrons 5% de nos bénéfices à des associations de protection animale et des initiatives environnementales. Nous croyons fermement que notre responsabilité va au-delà de nos produits.
          </p>
          <p className="text-lg">
            Notre équipe participe régulièrment à des actions de bénévolat dans des refuges et des centres de sauvetage d&apos;animaux. C&apos;est notre façon de rester connectés à notre mission première : améliorer la vie des animaux.
          </p>
          <div className="h-full"/>
          <Button text="Nos actions" Icon={ArrowRightIcon}/>
        </div>
        <HeroCard
          backgroundImage="/assets/ecology.jpg"
          className="flex-1"
          classNameLayout="w-full h-96 xl:h-full"
        >
        </HeroCard>
      </HeroCard>
    
    </main>
  );
}
