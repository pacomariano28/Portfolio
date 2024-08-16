import './App.css';
import React, { useEffect } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Proyects } from './components/proyects';
import { Techs } from './components/techs';
import { About } from './components/about';
import { Footer } from './components/footer';
import { Patterns } from './components/patterns.';
import { fadeUp } from './scripts/fadeUp';

function App() {
	useEffect(() => {
		// Llama a la función para configurar el efecto de fade-in
		fadeUp();

		// Opcionalmente, limpia el event listener cuando el componente se desmonte
		return () => {
			window.removeEventListener('scroll', fadeUp);
		};
	}, []); // La lista de dependencias vacía asegura que se ejecute una sola vez después del primer renderizado

	return (
		<div className="App">
			<Header />
			<Hero />
			<Proyects />
			<Techs />
			<Footer />
		</div>
	);
}

export default App;
