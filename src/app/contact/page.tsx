"use client";

import * as motion from "motion/react-client";

import { contact } from '@/src/lib/data';
import { emphasisFont } from '@/src/ui/fonts';

export default function Page() {
  return (
    <main className="flex flex-col justify-center font-sans gap-4">

      {/* First, contact page */}
      <motion.section className="flex flex-col justify-between w-full bg-fuchsia-200 p-4 rounded-3xl gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={`text-6xl md:text-7xl 2xl:text-8xl font-bold ${emphasisFont.className} tracking-tighter mb-4`}>
          Nous contacter
        </h2>

        <p className="text-lg">
          Vous avez une question, une suggestion ou un commentaire ? N&apos;hésitez pas à nous contacter ! Nous sommes là pour vous aider et nous serions ravis d&apos;avoir de vos nouvelles. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>

        <p className="text-lg mb-2">
          En plus, on ne mort pas !
        </p>
          
        <form className="gap-4 grid grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Ce site est juste un prototype, et la démo s\'arrête ici.');
          }}          
        >
          <input type="text" placeholder="Nom" className="p-4 rounded-3xl w-full col-span-2 xl:col-span-1 h-20" />
          <input type="email" placeholder="Email" className="p-4 rounded-3xl w-full col-span-2 xl:col-span-1 h-20" />
          <input type="text" placeholder="Sujet" className="p-4 rounded-3xl w-full col-span-2 h-20" />
          <textarea placeholder="Message" className="p-4 rounded-3xl col-span-2 h-80" />
          <button type="submit" className="bg-black text-white p-4 rounded-3xl w-full col-span-2">Envoyer</button>
        </form>

      </motion.section>      

      {/* Then, three sections with contact information */}
      <motion.section className="flex xl:flex-row flex-col justify-between w-full p-4 rounded-3xl bg-gray-300 gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }} 
      >
        {contact.map((item, index) => (
          <section key={index} className="flex-1 bg-gray-100 p-4 py-6 rounded-3xl relative flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
              {item.icon}
            </div>
            <h2 className={`text-3xl font-bold ${emphasisFont.className} mt-4`}>
              {item.title}
            </h2>
            <p className="text-lg text-center">
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
            </p>
          </section>
        ))}
      </motion.section>
    </main>
  );
}
