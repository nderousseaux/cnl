export default function Footer() {
  return (
		<footer className="p-4 bg-gray-100 text-center rounded-3xl">
      <p>&copy;{new Date().getFullYear()} Nathanaël Derousseaux. Tous droits réservés.</p>
      <p><a href="https://nderousseaux.fr" target="_blank" rel="noopener noreferrer">https://nderousseaux.fr</a></p>
    </footer>
  );
};
