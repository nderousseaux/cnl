import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface HeroCardProps {
	className?: string;
	colSpan?: number;
	rowSpan?: number;
	backgroundImage?: string;
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
		children 
	}: HeroCardProps) {

	const content = (
		<>
			{backgroundImage && 
				<Image
					src={backgroundImage}
					alt=""
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="absolute top-0 left-0 z-0 rounded-3xl"
				/>
			}
			<div className={clsx(
				className,
				"relative z-10 h-full"
			)}>
				{children}
			</div>
		</>
	);

	return (
		<section 
			className={clsx(
				"bg-fuchsia-50 p-4 rounded-3xl relative", 
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
		</section>
	);
}