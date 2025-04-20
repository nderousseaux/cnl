
import "@/src/ui/global.css";
import { primaryFont } from '@/src/ui/fonts';

import Nav from "@/src/ui/nav";
import Footer from "@/src/ui/footer";
// Main layout component
export default function RootLayout({children}: { children: React.ReactNode; }) {
  return (
    <html>
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="CNL - Collier Connecté" />
        <meta property="og:description" content="Découvrez le collier connecté CNL, une solution innovante pour le bien-être de votre animal." />
        <meta property="og:image" content="/collar.png" />
        <meta property="og:url" content="https://cnl.nderousseaux.fr" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${primaryFont.className} antialiased p-4 min-h-screen flex flex-col gap-4`}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}