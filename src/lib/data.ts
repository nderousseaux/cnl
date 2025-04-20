import React from "react";

import { ArrowRightIcon, EnvelopeIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline';


export const arguments_product : { title: string; image: string; description: string }[] = [
	{
		title: "Un collier à la pointe de la technologie",
		image: "/assets/collar.jpg",
		description: "Le collier CNL est équipé des dernières technologies. Grâce à des capteurs biométriques, il permet de suivre en temps réel la santé de votre animal. Les capteurs de fréquence cardiaque, de température et de respiration permettent de détecter les moindres changements et d'alerter en cas de problème."
	},
	{
		title: "Une caméra intelligente",
		image: "/assets/camera.jpg",
		description: "La caméra intelligente du collier CNL permet de surveiller votre animal à distance. Grâce à la vision HD/IR et à l'analyse comportementale par l'IA, vous pouvez suivre en temps réel les activités et le comportement de votre animal. L'IA permet de détecter les comportements anormaux et de vous alerter en cas de problème."
	},
	{
		title: "Une application mobile pour un suivi personnalisé",
		image: "/assets/phone.jpg",
		description: "Avec l'application mobile, vous pouvez suivre les données de votre animal et recevoir des alertes en cas de problème. Vous pouvez consulter l'historique des données et les tendances pour mieux comprendre le comportement de votre animal. L'application vous permet de personnaliser les alertes et les notifications en fonction des besoins"
	}
]

export const team: { name: string; poste: string; image: string }[] = [
	{
		name: "Nohann",
		poste: "Directeur",
		image: "/assets/team/1.jpeg",
	},
	{
		name: "Clara",
		poste: "Marketing",
		image: "/assets/team/2.jpeg",
	},
	{
		name: "Lola",
		poste: "Commercial",
		image: "/assets/team/3.jpeg",
	},
	{
		name: "Lucas",
		poste: "Comptabilité",
		image: "/assets/team/10.jpeg",
	},
	{
		name: "Emma",
		poste: "IoT",
		image: "/assets/team/4.jpeg",
	},
	{
		name: "Marie",
		poste: "IA embarquée",
		image: "/assets/team/5.jpeg",
	},
	{
		name: "Julie",
		poste: "Big Data",
		image: "/assets/team/6.jpeg",
	},
	{
		name: "Sophie",
		poste: "DevOps",
		image: "/assets/team/7.jpeg",
	},
	{
		name: "Marc",
		poste: "Support",
		image: "/assets/team/8.jpeg",
	},
	{
		name: "Louisa",
		poste: "Électronique",
		image: "/assets/team/9.jpeg",
	}
]


export const values: { title: string; description: string; icon: JSX.Element }[] = [
	{
		icon: React.createElement(ShieldCheckIcon, { className: "w-10 h-10" }),
		title: "Bien être animal",
		description: "Nous plaçons le bien-être de l'animal au coeur de chaque décision et de chaque produit que nous développons."
	},
	{
		icon: React.createElement(GlobeAltIcon, { className: "w-10 h-10" }),
		title: "Made in France",
		description: "Nous sommes fiers de concevoir et de fabriquer nos produits 100% en France, dans le respect des normes les plus strictes."
	},
	{
		icon: React.createElement(ChartBarIcon, { className: "w-10 h-10" }),
		title: "Qualité sans compromis",
		description: "Nous ne faisons jamais de compromis sur la qualité, la durabilité et la sécurité de nos produits."
	},
	{
		icon: React.createElement(EnvelopeIcon, { className: "w-10 h-10" }),
		title: "Transparence totale",
		description: "Nous croyons à une communication honnête et transparente avec nos clients, nos partenaires et nos employés."
	},
	{
		icon: React.createElement(ArrowRightIcon, { className: "w-10 h-10" }),
		title: "Bilan carbone neutre",
		description: "Nous nous engageons à réduire notre empreinte carbone et à compenser les émissions de CO2 de nos activités."
	},
	{
		icon: React.createElement(ArchiveBoxArrowDownIcon, { className: "w-10 h-10" }),
		title: "Accessibilité pour tous",
		description: "Nous nous efforçons de rendre nos produits accessibles au plus grand nombre de propriétaires d'animaux."
	}
]

export const contact: { title: string; description: string; icon: JSX.Element }[] = [
	{
		icon: React.createElement(ArchiveBoxArrowDownIcon, { className: "w-10 h-10" }),
		title: "Chat en direct",
		description: "Notre équipe est disponible en ligne du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions."
	},
	{
		icon: React.createElement(EnvelopeIcon, { className: "w-10 h-10" }),
		title: "Email",
		description: "Envoyez nous un email à l'adresse suivante : <a href='mailto:nohann.derousseauxlebert@gmail.com' className='underline'> nohann.derousseauxlebert@gmail.com </a>"
	},
	{
		icon: React.createElement(ArrowRightIcon, { className: "w-10 h-10" }),
		title: "Addresse",
		description: "12 rue de la Bouloie 25000 Besançon, France"
	}
]
