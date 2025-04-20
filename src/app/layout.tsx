import "@/src/ui/global.css";
import { primaryFont } from '@/src/ui/fonts';

import Nav from "@/src/ui/nav";
import Footer from "@/src/ui/footer";

// Metadata object
export const metadata = {
  title: "CNL - Collier Connecté",
  description: "Découvrez le collier connecté CNL, une solution innovante pour le bien-être de votre animal.",
  openGraph: {
    title: "CNL - Collier Connecté",
    description: "Découvrez le collier connecté CNL, une solution innovante pour le bien-être de votre animal.",
    images: "/collar.png",
    url: "https://cnl.nderousseaux.fr",
    type: "website",
  },
};

// Main layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${primaryFont.className} antialiased p-4 min-h-screen flex flex-col gap-4`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}