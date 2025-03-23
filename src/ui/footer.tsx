export default function Footer() {
  return (
		<footer className="p-4 bg-gray-100 text-center rounded-3xl">
      <p>&copy;{new Date().getFullYear()} Nathanaël Derousseaux. Tous droits réservés.</p>
      <p>Contactez moi : <a href="mailto:n.derousseaux@icloud.com">n.derousseaux@icloud.com</a></p>
      <p>Suivez-moi :
        <a href="https://twitter.com/@nderousseaux" target="_blank" rel="noopener noreferrer"> Twitter</a>,
				<a href="https://www.linkedin.com/in/nderousseaux/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>,
				<a href="https://cv.nderousseaux.fr" target="_blank" rel="noopener noreferrer"> CV</a>
      </p>
    </footer>
  );
};
