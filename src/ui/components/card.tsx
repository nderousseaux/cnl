import clsx from "clsx";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

import { emphasisFont } from "@/src/ui/fonts";

interface CardProps {
	id: number;
	className?: string;
	title: string;
	image: string;
	description: string;
}

export default function Card({ id, className, title, image, description }: CardProps) {
	const [isVisible, setIsVisible] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const currentCardRef = cardRef.current;
		if (currentCardRef) {
			observer.observe(currentCardRef);
		}

		return () => {
			if (currentCardRef) {
				observer.unobserve(currentCardRef);
			}
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className={clsx(
				className,
				"flex flex-col md:flex-row gap-6 md:gap-10 transition-opacity duration-500 items-center justify-center w-full",
				id % 2 !== 0 ? "md:flex-row-reverse flex-col" : "",
				isVisible ? "opacity-100" : "opacity-0"
			)}
		>
			<div className="relative w-full md:w-1/3 h-96 overflow-hidden rounded-3xl">
				<motion.div
					className="absolute inset-0 overflow-hidden rounded-3xl"
					whileHover={{ scale: 1.15, transition: { type: "spring" } }}
					initial={{ scale: 1.05 }}
				>
				
					<Image
						src={image}
						alt={title}
						className="rounded-3xl object-cover filter"
						layout="fill"
					/>

				</motion.div>
			</div>
			<div className="flex flex-col gap-6 text-left text-xl justify-center p-4 md:w-1/2 w-full">
				<h2
					className={clsx(
						"text-3xl md:text-4xl 2xl:text-5xl font-bold",
						emphasisFont.className,
						"tracking-tighter"
					)}
				>
					{title}
				</h2>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
}
