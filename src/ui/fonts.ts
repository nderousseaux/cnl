import { Inter } from 'next/font/google';
import { Sen } from 'next/font/google';

const primaryFont = Inter({ subsets: ['latin'] });
const emphasisFont = Sen({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export {
	primaryFont,
	emphasisFont
};