'use client';

import Image from 'next/image';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion } from 'motion/react';

import Model from "@/src/ui/components/model";
import { emphasisFont } from '@/src/ui/fonts';
import Button from '@/src/ui/components/button';
import { arguments_product } from '@/src/lib/data';
import Card from '@/src/ui/components/card';

export default function Page() {


  const modelRef = useRef(null);

  return (
    <main className="flex justify-center font-sans">
      <div className="flex flex-col gap-20">

        <section className="grid grid-cols-2 gap-10 mt-10">
        
          {/* Image at the left */} 
          <div className="col-span-1 relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/assets/green.jpg"
              alt="Collier CNL"
              className="rounded-3xl object-cover filter blur-lg"
              layout="fill"
            />
            <Canvas camera={{ position: [-3, 2, 10] }}>
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <Model ref={modelRef} position={[0, 1, 0]} />
                <OrbitControls />
                <Environment preset="sunset" />
                <FrameHandler modelRef={modelRef} />
              </Suspense>
            </Canvas>
          </div>

          {/* Right part, the title, desc, and price */} 
          <motion.div className="flex flex-col gap-10 text-left text-xl justify-between pb-4 align-bottom col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            
            <div className="flex flex-col gap-6">
              <h2 className={`text-6xl md:text-7xl 2xl:text-8xl font-bold ${emphasisFont.className} tracking-tighter`}>
                Le collier CNL
              </h2>
              
                <p className="text-3xl font-bold">38€ / mois</p>
              
                <p className="leading-relaxed">Le collier CNL est un collier connecté qui permet de suivre en temps réel la santé et le comportement de votre animal de compagnie. Il est doté d&apos;une caméra intelligente qui vous permet de surveiller votre animal à distance. Avec l&apos;application mobile, vous pouvez suivre les données de votre animal et recevoir des alertes en cas de problème, et ce, où que vous soyez. Avec le collier CNL, vous bénéficiez d&apos;un suivi personnalisé pour assurer le bien-être de votre animal.</p>
              <ul className="list-disc list-inside space-y-2">
                <li> Suivi de la santé de votre animal</li>
                <li> Analyse de son comportement et de son activité</li>
                <li> Surveillance en temps réel grâce à la caméra intelligente</li>
                <li> Alertes en cas de problème</li>
              </ul>
            </div>
            
            <Button href="/buy" text="Acheter" Icon={ShoppingBagIcon} />
          </motion.div>
        </section>

        <section className="flex flex-col gap-10 xl:mx-28 mb-10">
          <h2 className={`text-4xl md:text-4xl 2xl:text-6xl font-bold ${emphasisFont.className} tracking-tighter text-center`}>
            Pourquoi choisir le collier CNL ?
          </h2>
          <div className="flex flex-col gap-10 ">
            {arguments_product.map((item, index) => (
              <Card key={index} id={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function FrameHandler({ modelRef }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const idleRotationSpeed = 0.0005;

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += idleRotationSpeed;
      modelRef.current.rotation.x = mouse.y * 0.05;
    }
  });

  return null;
}
