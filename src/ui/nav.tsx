import Link from 'next/link';

import { emphasisFont } from '@/src/ui/fonts';
import Logo from '@/src/ui/components/logo';

export default function Nav() {
	return (
		<nav className="border-2 border-gray-300 h-20 rounded-3xl flex justify-between items-center px-10 mb-4">
			{/* logo right */}
			<div>
				<Logo />
			</div>

			{/* links left */}
			<ul className={`${emphasisFont.className} flex justify-between gap-20 uppercase font-semibold text-2xl tracking-lighter`}>
				<li>
					<Link href="/">Accueil</Link>
				</li>
				<li>
					<Link href="/produit">Notre produit</Link>
				</li>
				<li>
					<Link href="/equipe">Notre équipe</Link>
				</li>
				<li>
					<Link href="/valeurs">Nos valeurs</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}