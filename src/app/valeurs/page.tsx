import Image from 'next/image';
import Link from 'next/link';

import { emphasisFont } from '@/src/ui/fonts';
import { ArrowRightIcon, EnvelopeIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const data = [
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Bien être animal",
      description: "Nous plaçons le bien-être de l&apos;animal au coeur de chaque décision et de chaque produit que nous développons."
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10" />,
      title: "Made in France",
      description: "Nous sommes fiers de concevoir et de fabriquer nos produits 100% en France, dans le respect des normes les plus strictes."
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      title: "Qualité sans compromis",
      description: "Nous ne faisons jamais de compromis sur la qualité, la durabilité et la sécurité de nos produits."
    },
    {
      icon: <EnvelopeIcon className="w-10 h-10" />,
      title: "Transparence totale",
      description: "Nous croyons à une communication honnête et transparente avec nos clients, nos partenaires et nos employés."
    },
    {
      icon: <ArrowRightIcon className="w-10 h-10" />,
      title: "Bilan carbone neutre",
      description: "Nous nous engageons à réduire notre empreinte carbone et à compenser les émissions de CO2 de nos activités."
    },
    {
      icon: <ArchiveBoxArrowDownIcon className="w-10 h-10" />,
      title: "Accessibilité pour tous",
      description: "Nous nous efforçons de rendre nos produits accessibles au plus grand nombre de propriétaires d&apos;animaux."
    }
  ]

  return (
    <main className="flex justify-center font-sans">
      <div className="w-full flex flex-col">
        <section className="col-span-2 row-span-2 bg-gray-100 p-6 rounded-3xl flex flex-col justify-between mb-4">
          <h2 className={`text-7xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>Nos valeurs</h2>
          <p className="text-lg">
          Chez nous, l&apos;innovation, l&apos;intégrité et la collaboration sont au cœur de tout ce que nous faisons. Nous croyons fermement que chaque défi est une opportunité de croissance et d&apos;apprentissage. Notre équipe est dédiée à fournir des solutions de haute qualité tout en respectant les normes éthiques les plus élevées. Ensemble, nous travaillons pour créer un impact positif et durable dans notre communauté et au-delà.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full pb-4">
          {data.map((valeur, index) => (
            <section className="col-span-1 row-span-1 bg-gray-200 p-4 py-6 rounded-3xl relative flex flex-col items-center gap-2" key={index}>
                <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
                  {valeur.icon}
                </div>
                <h2 className={`text-3xl font-bold ${emphasisFont.className} mt-4`}>
                  {valeur.title}
                </h2>
                <p className="text-lg text-center">
                  {valeur.description}
                </p>
            </section>
          ))}
        </div>
        <section className="col-span-2 row-span-2 bg-gray-100 p-6 rounded-3xl flex justify-between mb-4 gap-40">
          <div className="flex flex-col gap-4 text-left text-xl pb-4 ">
            <h2 className={`text-7xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>Nos engagement envers les animaux et la planète</h2>
            <p className="text-lg">
              Chaque année, nous consacrons 5% de nos bénéfices à des associations de protection animale et des initiatives environnementales. Nous croyons fermement que notre responsabilité va au-delà de nos produits.
            </p>
            <p className="text-lg">
              Notre équipe participe régulièrment à des actions de bénévolat dans des refuges et des centres de sauvetage d&apos;animaux. C&apos;est notre façon de rester connectés à notre mission première : améliorer la vie des animaux.
            </p>
            <div className="h-full"/>

            <Link href="/contact" className="w-80 h-14 rounded-full flex items-center justify-between border-white border-2 pl-4 p-1 bg-black">
              <p className={`text-white uppercase ${emphasisFont.className} text-2xl font-bold`}>
                Nos actions
              </p>
              <div className="bg-white rounded-full flex items-center justify-center aspect-square h-full">
                <EnvelopeIcon className="w-6 h-6 text-black" />
              </div>
            </Link>
          </div>
          <Image src="/assets/ecology.jpg" alt="Values" width={800} height={400} className="rounded-3xl" />
          
        </section>
      </div>
    </main>
  );
}
