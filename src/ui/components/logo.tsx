import Image from "next/image";
import Link from "next/link";

import { emphasisFont } from "@/src/ui/fonts";

export default function Logo() {
	return (
		<Link className="flex gap-4 items-center" href="/">
			{/* Round Logo */}
			<div className="w-12 h-12 bg-fuchsia-800 rounded-full">
				{/* Icon */}
				<Image src="/logo.png" alt="Logo" width={2000} height={2000} />
			</div>

			{/* Title */}
			<h1 className={`${emphasisFont.className} text-4xl font-bold`}>
				CNL
			</h1>
		</Link>
	);
}