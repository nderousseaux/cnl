import Link from "next/link";

import { emphasisFont } from "@/src/ui/fonts";
import clsx from "clsx";

interface ButtonProps {
	text: string;
	Icon: React.ElementType;
	type?: "primary" | "secondary";
	className?: string;
	href: string;
}

export default function Button(
	{ text,
		Icon,
		type = "primary",
		className,
		href 
	}: ButtonProps) {

	return (
		<Link href={href} 
			className={clsx(
				className,
				"w-80 h-14 rounded-full flex items-center justify-between border-2 pl-4 pointer-events-auto",
				type === "primary" ? 
				"text-black bg-white border-black" :
				"bg-black bg-opacity-40 text-white border-white p-1"
			)}
		>
			<p className={clsx(
				`uppercase ${emphasisFont.className} text-2xl font-bold`,
				type === "primary" ? 
				"text-black" :
				"text-white"
			)}>
				{text}
			</p>
			<div className={clsx(
				"rounded-full flex items-center justify-center aspect-square h-full",
				type === "primary" ?
					"bg-black border-4 border-white" :
					"bg-white"
			)}>
				<Icon className={clsx(
					"w-6 h-6",
					type === "secondary" ? "text-black" : "text-white"
				)}/>
			</div>
		</Link>

	)
}