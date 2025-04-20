'use client';

import Image from 'next/image';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion } from 'motion/react';

import Model from "@/src/ui/components/model";
import { emphasisFont } from '@/src/ui/fonts';
import Button from '@/src/ui/components/button';
import { arguments_product } from '@/src/lib/data';
import Card from '@/src/ui/components/card';

function Model3d() {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModel(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const modelRef = useRef<THREE.Group>(null!);

  if (!showModel) return null;
  return (
    <Canvas camera={{ position: [-3, 2, 10] }}>
      <ambientLight intensity={0.5} />
      <Suspense fallback={<Html center>Patientez...</Html>}>
        <Model ref={modelRef} position={[0, 1, 0]} />
        <OrbitControls />
        <Environment preset="sunset" />
        <FrameHandler modelRef={modelRef} />
      </Suspense>
    </Canvas>
  );
}

export default function Page() {

  return (
    <main className="flex justify-center font-sans">
      <div className="flex flex-col gap-10 lg:gap-20">
        <section className="grid lg:grid-cols-2 gap-4 lg:gap-10 lg:mt-10">
          {/* Image at the left */}
          <motion.div className="col-span-1 flex justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} 
          >
            <div className="relative min-h-96 max-h-[700px] w-full h-full overflow-hidden rounded-3xl">
              <Image
                src="/assets/green.jpg"
                alt="Collier CNL"
                className="rounded-3xl object-cover filter blur-lg"
                layout="fill"
              />
              <Model3d />
            </div>
          </motion.div>
          {/* Right part, the title, desc, and price */}
          <motion.div
            className="flex flex-col gap-10 text-left text-md xl:text-lg justify-between pb-4 align-bottom col-span-1 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex flex-col gap-6">
              <h2 className={`text-5xl md:text-7xl 2xl:text-8xl font-bold ${emphasisFont.className} tracking-tighter`}>
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
            <Button text="Acheter" Icon={ShoppingBagIcon} />
          </motion.div>
        </section>
        <motion.section className="flex flex-col gap-10 lg:mx-28 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}  
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl 2xl:text-6xl font-bold ${emphasisFont.className} tracking-tighter text-center`}>
            Pourquoi choisir le collier CNL ?
          </h2>
          <div className="flex flex-col gap-10 md:gap-20 justify-center items-center">
            {arguments_product.map((item, index) => (
              <Card key={index} id={index} {...item} />
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

import { RefObject } from 'react';
import * as THREE from 'three';

function FrameHandler({ modelRef }: { modelRef: RefObject<THREE.Group> }) {
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
