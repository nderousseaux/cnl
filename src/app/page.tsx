import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

import { emphasisFont } from "@/src/ui/fonts";

// Root page
export default function Page() {
  
  return (
    <main className="flex-grow grid grid-cols-4 grid-rows-3 gap-4">
      {/* Us, 2x2 */}
      <section className="col-span-2 row-span-2 bg-gray-100 p-6 rounded-3xl flex flex-col justify-between">
        <h2 className={`text-8xl font-bold ${emphasisFont.className} tracking-tighter`}>La technologie au service du bien être animal</h2>
        <p className="text-lg">
        Le collier CNL est un produit qui vise à répondre aux besoins des propriétaires sur la santé physique et mentale de leur animal de compagnie pendant leur absence. L’objectif est d’offrir aux propriétaires grâce à une technologie connectée et un suivi personnalisé, une solution innovante et évolutive  pour assurer le bien-être de leur animal. Le collier, connecté et doté d’une caméra intelligente permet une surveillance en temps réel de la santé et du comportement de leur animal.
        </p>
      </section>
  
      {/* Product, 2x3 */}
      <section className="col-span-2 row-span-3 bg-gray-400 p-10 rounded-3xl relative">
        <Image
          src="/assets/product.jpg"
          alt="Product Background"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />

        <div className="absolute bottom-10 right-10 gap-4 flex"> 
          <Link href="/product" className="bg-white w-80 h-14 rounded-full flex items-center justify-between border-black border-2 pl-4">
            <p className={`text-black uppercase ${emphasisFont.className} text-2xl font-bold`}>
              Notre produit
            </p>
            <div className="bg-black rounded-full flex items-center justify-center aspect-square h-full border-white border-4">
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </div>
          </Link>
          <Link href="/contact" className="w-80 h-14 rounded-full flex items-center justify-between border-white border-2 pl-4 p-1 bg-black bg-opacity-40">
            <p className={`text-white uppercase ${emphasisFont.className} text-2xl font-bold`}>
              Nous contacter
            </p>
            <div className="bg-white rounded-full flex items-center justify-center aspect-square h-full">
              <EnvelopeIcon className="w-6 h-6 text-black" />
            </div>
          </Link>
        </div>

      </section>

      {/* equipe, 1x1 */}      
      <section className="col-span-1 row-span-1 bg-gray-200 p-6 rounded-3xl flex flex-col justify-end relative">
        <Image
          src="/assets/team.jpg"
          alt="Team Background"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
        <h2 className={`text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>#team</h2>
      </section>

      {/* green, 1x1 */}
      <section className="col-span-1 row-span-1 bg-gray-200 p-6 rounded-3xl flex flex-col justify-end relative">
        <Image
          src="/assets/green.jpg"
          alt="Green Background"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
        <h2 className={`text-6xl font-bold ${emphasisFont.className} relative z-10 text-white`}>#green</h2>
      </section>

    </main>
  );
}
