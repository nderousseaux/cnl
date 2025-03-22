import Image from 'next/image';
import Link from 'next/link';

import { emphasisFont } from '@/src/ui/fonts';
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const data = [
    {
      name: "Nohann Derousseaux--Lebert",
      poste: "CEO",
      image: "/assets/team/1.jpeg",
    },
    {
      name: "Cédric Derousseaux",
      poste: "CTO",
      image: "/assets/team/2.jpeg",
    },
    {
      name: "Léa Derousseaux",
      poste: "COO",
      image: "/assets/team/3.jpeg",
    },
    {
      name: "Louis Remy",
      poste: "CFO",
      image: "/assets/team/4.jpeg",
    },
    {
      name: "Alice Martin",
      poste: "CMO",
      image: "/assets/team/5.jpeg",
    },
    {
      name: "Julien Dupont",
      poste: "Lead Developer",
      image: "/assets/team/6.jpeg",
    },
    {
      name: "Sophie Lambert",
      poste: "Product Manager",
      image: "/assets/team/7.jpeg",
    },
    {
      name: "Marc Durand",
      poste: "UX Designer",
      image: "/assets/team/8.jpeg",
    },
    {
      name: "Emma Petit",
      poste: "Data Scientist",
      image: "/assets/team/9.jpeg",
    },
    {
      name: "Lucas Moreau",
      poste: "DevOps Engineer",
      image: "/assets/team/10.jpeg",
    },
  ]

  
  return (
    <main className="flex justify-center h-screen font-sans">
      
      <div className="w-full max-w-6xl p-4 flex flex-col">
        <h1 className="text-4xl font-bold mb-8 text-center">Notre équipe</h1>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">Nous avons le plaisir de vous présenter notre équipe, composée de professionnels passionnés et engagés. Chaque membre de notre équipe apporte son expertise et son savoir-faire pour vous offrir des produits et services de qualité. Découvrez les visages qui se cachent derrière CNL.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mb-4" />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.poste}</p>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
}
