import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Proyects } from './components/proyects';
import { Techs } from './components/techs';
import { About } from './components/about';
import { Footer } from './components/footer';

function App() {
	return (
		<div className="App">
			<Header/>
			<main>
				<Hero/>
				<Proyects/>
				<Techs/>
				<About/>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
