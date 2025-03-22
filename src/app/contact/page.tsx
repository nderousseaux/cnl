import { emphasisFont } from '@/src/ui/fonts';
import { ArrowRightIcon, EnvelopeIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex justify-center h-screen font-sans">
      <div className="w-full flex flex-col">
        <section className="col-span-2 row-span-2 bg-gray-100 p-6 rounded-3xl flex flex-col justify-between mb-4">
          <h2 className={`text-7xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>Nous contacter</h2>
          
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nom" className="p-4 rounded-3xl w-full" />
            <input type="email" placeholder="Email" className="p-4 rounded-3xl w-full" />
            <input type="text" placeholder="Sujet" className="p-4 rounded-3xl w-full" />
            <textarea placeholder="Message" className="p-4 rounded-3xl w-82" />
            <button type="submit" className="bg-black text-white p-4 rounded-3xl w-full">Envoyer</button>
          </form>
        </section>
        <section className="col-span-2 row-span-2 bg-gray-100 p-6 rounded-3xl flex justify-between mb-4 gap-4">
          <section className="flex-1 bg-gray-200 p-4 py-6 rounded-3xl relative flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
              <ArchiveBoxArrowDownIcon className="w-10 h-10" />
            </div>
            <h2 className={`text-3xl font-bold ${emphasisFont.className} mt-4`}>
              Chat en direct
            </h2>
            <p className="text-lg text-center">
              Notre équipe est disponible en ligne du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions.
            </p>
          </section>
          <section className="flex-1 bg-gray-200 p-4 py-6 rounded-3xl relative flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
              <EnvelopeIcon className="w-10 h-10" />
            </div>
            <h2 className={`text-3xl font-bold ${emphasisFont.className} mt-4`}>
              Email
            </h2>
            <p className="text-lg text-center">
              Envoyez nous un email à l&apos;adresse suivante : <a href="mailto:nohann.derousseauxlebert@gmail.com" className="underline">
              nohann.derousseauxlebert@gmail.com
              </a> 
            </p>
          </section>
          <section className="flex-1 bg-gray-200 p-4 py-6 rounded-3xl relative flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
              <ArrowRightIcon className="w-10 h-10" />
            </div>
            <h2 className={`text-3xl font-bold ${emphasisFont.className} mt-4`}>
              Addresse
            </h2>
            <p className="text-lg text-center">
              12 rue de la Bouloie 25000 Besançon, France
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
