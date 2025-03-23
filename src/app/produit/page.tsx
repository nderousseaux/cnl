import Image from 'next/image';
import Link from 'next/link';

import { emphasisFont } from '@/src/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const data = [
    {
      title: "Un collier à la pointe de la technologie",
      image: "/assets/collar.jpg",
      description: "Le collier CNL est équipé des dernières technologies. Grâce à des capteurs biométriques, il permet de suivre en temps réel la santé de votre animal. Les capteurs de fréquence cardiaque, de température et de respiration permettent de détecter les moindres changements et d&apos;alerter en cas de problème."
    },
    {
      title: "Une caméra intelligente",
      image: "/assets/camera.jpg",
      description: "La caméra intelligente du collier CNL permet de surveiller votre animal à distance. Grâce à la vision HD/IR et à l&apos;analyse comportementale par l&apos;IA, vous pouvez suivre en temps réel les activités et le comportement de votre animal. L&apos;IA permet de détecter les comportements anormaux et de vous alerter en cas de problème."
    },
    {
      title: "Une application mobile pour un suivi personnalisé",
      image: "/assets/phone.jpg",
      description: "Avec l&apos;application mobile, vous pouvez suivre les données de votre animal et recevoir des alertes en cas de problème. Vous pouvez consulter l&apos;historique des données et les tendances pour mieux comprendre le comportement de votre animal. L&apos;application vous permet de personnaliser les alertes et les notifications en fonction des besoins"
    }
  ]

  
  return (
    <main className="flex justify-center font-sans">
      <div className="text-center p-16">

        <section className="flex gap-10">
          {/* Left part, the product */}
          <Image
            src="/assets/collar.webp"
            alt="Product"
            width={600}
            height={400}
            className="rounded-3xl"
          />

          {/* Right part, the title, desc, and price */} 
          <div className="flex flex-col gap-10 text-left text-xl justify-between pb-4 ">
            <div className="flex flex-col gap-6">
              <h1 className={`text-8xl font-semibold ${emphasisFont.className}`}>Le collier CNL</h1>
              
                <p className="text-3xl font-bold">34.99€ / mois</p>
              
                <p className="leading-relaxed">Le collier CNL est un collier connecté qui permet de suivre en temps réel la santé et le comportement de votre animal de compagnie. Il est doté d&apos;une caméra intelligente qui vous permet de surveiller votre animal à distance. Avec l&apos;application mobile, vous pouvez suivre les données de votre animal et recevoir des alertes en cas de problème, et ce, où que vous soyez. Avec le collier CNL, vous bénéficiez d&apos;un suivi personnalisé pour assurer le bien-être de votre animal.</p>
              <ul className="list-disc list-inside space-y-2">
                <li> Suivi de la santé de votre animal</li>
                <li> Analyse de son comportement et de son activité</li>
                <li> Surveillance en temps réel grâce à la caméra intelligente</li>
                <li> Alertes en cas de problème</li>
              </ul>
            </div>
            
            <Link href="/buy" className="bg-white w-80 h-14 rounded-full flex items-center justify-between border-black border-2 pl-4">
              <p className={`text-black uppercase ${emphasisFont.className} text-2xl font-bold`}>
                Acheter
              </p>
              <div className="bg-black rounded-full flex items-center justify-center aspect-square h-full border-white border-4">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-10 py-24 max-w-8xl mt-4">
          <h2 className={`text-6xl mb-6 ${emphasisFont.className}`}>Pourquoi choisir CNL ?</h2>
          <div className="flex flex-col gap-10 ">
            {data.map((item, index) => (
                <div key={index} className={`flex gap-10 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                {/* Image at the left */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-3xl"
                />
                {/* Text at the right */}
                <div className="flex flex-col gap-6 text-left justify-center">
                  <h3 className={`text-4xl ${emphasisFont.className}`}>{item.title}</h3>
                  <p className="text-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
