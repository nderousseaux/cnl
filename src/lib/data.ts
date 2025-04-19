interface Product {
	title: string;
	image: string;
	description: string;
}

interface TeamMember {
	name: string;
	poste: string;
	image: string;
}

export const arguments_product : Product[] = [
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

export const team: TeamMember[] = [
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