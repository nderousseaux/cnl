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

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className={clsx(
				className,
				"flex gap-10 transition-opacity duration-500",
				id % 2 !== 0 ? "flex-row-reverse" : "",
				isVisible ? "opacity-100" : "opacity-0"
			)}
		>
			{/* Image at the left */}
			<div className="relative w-full h-96 rounded-3xl overflow-hidden">
				<motion.div
					className="absolute rounded-3xl overflow-hidden h-96 w-full"
					whileHover={{ scale: 1.15, transition: { type: "spring" } }}
					initial={{ scale: 1.05 }}
				>
					<Image
						src={image}
						alt={title}
						layout="fill"
						className="rounded-3xl"
					/>
				</motion.div>
			</div>
			{/* Text at the right */}
			<div className="flex flex-col gap-6 text-left justify-center">
				<h3 className={`text-4xl font-bold ${emphasisFont.className}`}>{title}</h3>
				<p className="text-xl">{description}</p>
			</div>
		</div>
	);
}
