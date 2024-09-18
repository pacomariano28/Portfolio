import { About } from "./about";

export function Footer() {
	return (
		<section className="w-100">
			<About />
			<footer className="w-100 p-3 d-flex justify-content-center align-items-center">
				<small>&copy; 2024 Francisco Mariano Ortiz.</small>
			</footer>
		</section>
	)
}