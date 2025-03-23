import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

interface HeroCardProps {
	className?: string;
	colSpan?: number;
	rowSpan?: number;
	backgroundImage?: string;
	animationDelay?: number;
	href?: string;
	children: React.ReactNode;
}

export default function HeroCard(
	{ 
		className,
		colSpan = 1,
		rowSpan = 1,
		backgroundImage,
		href,
		animationDelay = 0,
		children 
	}: HeroCardProps) {

	const content = (
		<>
			{backgroundImage && 
				<motion.div className="absolute inset-0 overflow-hidden rounded-3xl"
					whileHover={{ scale: 1.1, transition: { type: "spring" } }}
					>
					<Image
						src={backgroundImage}
						alt=""
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</motion.div>
			}
			<div className={clsx(
				className,
				"relative z-10 h-full pointer-events-none"
			)}>
				{children}
			</div>
		</>
	);

	return (
		<motion.section 
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: animationDelay, duration: 1 }}
			className={clsx(
				"bg-fuchsia-50 p-4 rounded-3xl relative overflow-hidden", 
				`col-span-${colSpan}`, 
				`row-span-${rowSpan}`
			)}
		>
			{href ?
				<Link href={href}>
					{content}
				</Link>
				: content
			}
		</motion.section>
	);
}