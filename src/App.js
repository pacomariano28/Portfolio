import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Proyects } from './components/proyects';
import { Techs } from './components/techs';
import { About } from './components/about';
import { Footer } from './components/footer';
import { Patterns } from './components/patterns.';

function App() {
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
