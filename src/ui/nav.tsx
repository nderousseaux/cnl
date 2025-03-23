'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';
import clsx from 'clsx';

import { emphasisFont } from '@/src/ui/fonts';
import Logo from '@/src/ui/components/logo';

export default function Nav() {
	const pathname = usePathname();
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{ href: "/", label: "Accueil" },
		{ href: "/produit", label: "Produit" },
		{ href: "/equipe", label: "Notre équipe" },
		{ href: "/valeurs", label: "Nos valeurs" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="border-2 border-gray-300 h-20 rounded-3xl flex justify-between items-center px-4 mb-4 relative">
			{/* logo left */}
			<div>
				<Logo />
			</div>

			{/* burger menu button */}
			<button
				className="xl:hidden flex flex-col justify-center items-center h-full pr-4"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<motion.div
					className="w-6 h-1 bg-black mb-1"
					initial={{ rotate: 0, y: 0 }}
					animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
					transition={{ duration: 0.3 }}
				></motion.div>
				<motion.div
					className="w-6 h-1 bg-black mb-1"
					initial={{ opacity: 1 }}
					animate={{ opacity: menuOpen ? 0 : 1 }}
					transition={{ duration: 0.3 }}
				></motion.div>
				<motion.div
					className="w-6 h-1 bg-black"
					initial={{ rotate: 0, y: 0 }}
					animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
					transition={{ duration: 0.3 }}
				></motion.div>
			</button>

			{/* links */}
			<ul 
				className={clsx(
					emphasisFont.className,
					"uppercase font-semibold text-2xl flex tracking-lighter",
					"xl:flex xl:static xl:top-0 xl:left-0 xl:w-auto xl:bg-transparent xl:flex-row xl:py-0 xl:items-center xl:justify-center xl:mt-0 xl:border-none xl:h-full w-[calc(100vw-2rem)] -translate-x-[2px]",
					menuOpen 
						? 'absolute top-20 left-0 bg-white flex-col items-center z-10 border-2 border-gray-300 rounded-3xl mt-3 py-4' 
						: 'hidden'
				)}
			>
				{links.map(({ href, label }) => (
					<li key={href} className='xl:w-auto w-full xl:block flex justify-center xl:h-full'>
						<Link
							href={href}
							className="flex items-center h-full xl:px-4 2xl:px-8 xl:py-0 py-1 xl:w-auto w-full justify-center -translate-x-4"
							onMouseEnter={() => setHoveredLink(href)}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={() => setMenuOpen(false)}
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