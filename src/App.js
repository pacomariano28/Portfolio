import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Proyects } from './components/proyects';
import { Techs } from './components/techs';
import { About } from './components/about';

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
		</div>
	);
}

export default App;
