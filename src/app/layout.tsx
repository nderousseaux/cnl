
import "@/src/ui/global.css";
import { primaryFont } from '@/src/ui/fonts';

import Nav from "@/src/ui/nav";
import Footer from "@/src/ui/footer";
// Main layout component
export default function RootLayout({children}: { children: React.ReactNode; }) {

  return (
    <html>
      <body className={`${primaryFont.className} antialiased p-4 min-h-screen flex flex-col gap-4`}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}