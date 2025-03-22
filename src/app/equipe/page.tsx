import Image from 'next/image';
import Link from 'next/link';

import { emphasisFont } from '@/src/ui/fonts';
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const data = [
    {
      name: "Nohann",
      poste: "Directeur",
      image: "/assets/team/1.jpeg",
    },
    {
      name: "Clara",
      poste: "Marketing",
      image: "/assets/team/2.jpeg",
    },
    {
      name: "Lola",
      poste: "Commercial",
      image: "/assets/team/3.jpeg",
    },
    {
      name: "Lucas",
      poste: "Comptabilité",
      image: "/assets/team/10.jpeg",
    },
    {
      name: "Emma",
      poste: "IoT",
      image: "/assets/team/4.jpeg",
    },
    {
      name: "Marie",
      poste: "IA embarquée",
      image: "/assets/team/5.jpeg",
    },
    {
      name: "Julie",
      poste: "Big Data",
      image: "/assets/team/6.jpeg",
    },
    {
      name: "Sophie",
      poste: "DevOps",
      image: "/assets/team/7.jpeg",
    },
    {
      name: "Marc",
      poste: "Support",
      image: "/assets/team/8.jpeg",
    },
    {
      name: "Louisa",
      poste: "Électronique",
      image: "/assets/team/9.jpeg",
    }
  ]

  
  return (
    <main className="flex justify-center h-screen font-sans">
      
      <div className="w-full flex flex-col">
        <section className="col-span-2 row-span-2 bg-gray-100 p-6 rounded-3xl flex flex-col justify-between mb-4">
          <h2 className={`text-7xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>Notre équipe</h2>
          <p className="text-lg">
          Nous avons le plaisir de vous présenter notre équipe, composée de professionnels passionnés et engagés. Chaque membre de notre équipe apporte son expertise et son savoir-faire pour vous offrir des produits et services de qualité. Découvrez les visages qui se cachent derrière CNL. 
          Notre équipe se compose de 10 membres, chacun ayant un rôle clé dans le développement et la réussite de notre entreprise. Découvrez les visages qui se cachent derrière CNL.
          </p>
        </section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full pb-4">
          {data.map((member, index) => (
            <section className="col-span-1 row-span-1 bg-gray-200 p-2 rounded-3xl flex flex-col justify-end relative aspect-[3/4]" key={index}>
              <Image
              src={member.image}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
              />
                <h2 className={`text-4xl md:text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>{member.name}</h2>
                <h2 className={`text-xl md:text-3xl font-bold ${emphasisFont.className} relative z-10 text-white`}>#{member.poste}</h2>
            </section>
          ))}
        </div>
      </div>
      
    </main>
  );
}
