import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

interface HeroCardProps {
	className?: string;
	classNameLayout?: string;
	backgroundImage?: string;
	animationDelay?: number;
	href?: string;
	children: React.ReactNode;
}

export default function HeroCard(
	{ 
		className,
		classNameLayout,
		backgroundImage,
		href,
		animationDelay = 0,
		children 
	}: HeroCardProps) {

	const content = (
		<>
			{backgroundImage && 
				<motion.div className="absolute inset-0 overflow-hidden rounded-3xl"
					whileHover={{ scale: 1.15, transition: { type: "spring" } }}
					initial={{ scale: 1.05 }}
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
				"relative z-5 h-full pointer-events-none"
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
				classNameLayout
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