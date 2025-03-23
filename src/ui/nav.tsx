'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';

import { emphasisFont } from '@/src/ui/fonts';
import Logo from '@/src/ui/components/logo';

export default function Nav() {
	const pathname = usePathname();
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	const links = [
		{ href: "/", label: "Accueil" },
		{ href: "/produit", label: "Notre produit" },
		{ href: "/equipe", label: "Notre équipe" },
		{ href: "/valeurs", label: "Nos valeurs" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="border-2 border-gray-300 h-20 rounded-3xl flex justify-between items-center px-4 mb-4">
			{/* logo right */}
			<div>
				<Logo />
			</div>

			{/* links left */}
			<ul className={`${emphasisFont.className} flex justify-between uppercase font-semibold text-2xl tracking-lighter h-full px-6`}>
				{links.map(({ href, label }) => (
					<li key={href}>
						<Link
							href={href}
							className="px-10 flex items-center h-full"
							onMouseEnter={() => setHoveredLink(href)}
							onMouseLeave={() => setHoveredLink(null)}
						>
							<motion.span
								className="text-4xl mr-2 text-fuchsia-800"
								initial={{ opacity: 0, x: -10, y: -2 }}
								animate={{ opacity: (href === pathname && !hoveredLink) || hoveredLink === href ? 1 : 0, x: (href === pathname && !hoveredLink) || hoveredLink === href ? 0 : -10 }}
								exit={{ opacity: 0, x: -10 }}
								transition={{ duration: 0.3 }}
							>
								•
							</motion.span>
							<p>{label}</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}