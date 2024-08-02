import './techs.css'

/* IMG FROM https://devicon.dev/ */


export function Techs({ logo }) {
	const frontTechs = [
		'html5',
		'css3',
		'bootstrap',
		'tailwindcss',
		'javascript',
		'astro',
		'react',
		'angular',
		'typescript',
		'jquery'
	];

	const backTechs = [
		'mysql',
		'java',
		'nodejs',
		'c',
		'php'
	];

	const otherTechs = [
		'github',
		'figma',
		'bash'
	];


	return (
		/*<section className='container d-flex flex-column justify-content-center align-items-center'>
			<div className='d-flex flex-column justify-content-center col-lg-12 gap-5'>
				<article>
					<h2 className='gradient fw-bold'>FRONTEND</h2>
					<div className="d-flex col-lg-12 gap-5 flex-wrap">
						{frontTechs.map((tech) => (
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
								alt={`${tech} logo`}
								className="card-gradient col-lg-2 p-5"
							/>
						))}
					</div>
				</article>

				<article>
					<h2 className='gradient fw-bold mt-5'>BACKEND</h2>
					<div className="d-flex col-lg-12 gap-5 flex-wrap">
						{backTechs.map((tech) => (
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
								alt={`${tech} logo`}
								className="card-gradient col-lg-2 p-5"
							/>
						))}
					</div>
				</article>

				<article>
					<h2 className='gradient fw-bold mt-5'>OTHER</h2>
					<div className="d-flex col-lg-12 gap- flex-wrap">
						{otherTechs.map((tech) => (
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
								alt={`${tech} logo`}
								className="card-gradient col-lg-2 p-5"
							/>
						))}
					</div>
				</article>
			</div>
		</section>*/

		 <section className='container d-flex flex-column justify-content-center align-items-center col-10'>
			<div className='d-flex flex-column justify-content-center col-lg-12 gap-5'>
				<article>
					<h2 className='gradient fw-bold'>FRONTEND</h2>
					<div className="d-flex col-12 gap-3 flex-wrap">
						{frontTechs.map((tech) => (
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
								alt={`${tech} logo`}
								className="card-gradient col-2 col-lg-1 p-3"
							/>
						))}
					</div>
				</article>

				<article>
					<h2 className='gradient fw-bold mt-5'>BACKEND</h2>
					<div className="d-flex col-lg-12 gap-3 flex-wrap">
						{backTechs.map((tech) => (
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
								alt={`${tech} logo`}
								className="card-gradient col-2 col-lg-1 p-3"
							/>
						))}
					</div>
				</article>

				<article>
					<h2 className='gradient fw-bold mt-5'>OTHER</h2>
					<div className="d-flex col-12 gap-3 flex-wrap">
						{otherTechs.map((tech) => (
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original.svg`}
								alt={`${tech} logo`}
								className="card-gradient col-2 col-lg-1 p-3"
							/>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}