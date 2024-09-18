import ProyectCard from './proyect-card';
import './proyects.css';

export function Proyects() {
	return (
		<section className='proyects_container d-flex align-items-center justify-content-center w-100'>
			<div className='col-lg-8 col-12'>
				<svg className='curva2' width="86" height="81" viewBox="0 0 86 81" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="path-1-outside-1_199_1091" maskUnits="userSpaceOnUse" x="0" y="0" width="86" height="81" fill="black">
						<rect fill="white" width="86" height="81" />
						<path d="M5 0L86 0V76H35C18.4315 76 5 62.5685 5 46V0Z" />
					</mask>
					<path d="M5 0L86 0L5 0ZM86 81H35C15.67 81 0 65.33 0 46H10C10 59.8071 21.1929 71 35 71H86V81ZM35 81C15.67 81 0 65.33 0 46V0L10 0V46C10 59.8071 21.1929 71 35 71V81ZM86 0V76V0Z" fill="#e07a43" mask="url(#path-1-outside-1_199_1091)" />
				</svg>
				<h2 className="gradient fw-bold">&lt;PROJECTS&gt;</h2>
				<div className='d-flex flex-column cards-container gap-5'>
					<ProyectCard
						title="API REST"
						techs={["Astro", "TailwindCss"]}
						text="Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS."
						image="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/10/visual-studio-code.jpeg?fit=1920%2C1080&quality=50&strip=all&ssl=1"
					/>

					<ProyectCard
						title="MECKI JS"
						techs={["React", "apachekafka"]}
						text="Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS."
						image="https://www.blog.brightcoding.dev/wp-content/uploads/2023/05/Angular-Fundamentals-A-Practical-Guide-with-Code-Examples-bright-coding-mohamed-idbrahim.png"
					/>

					<ProyectCard
						title="LAMEBICHOS"
						techs={["React", "Bootstrap"]}
						text="Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS."
						image="https://i.ytimg.com/vi/AXST7grbqVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqzzl1yssvre-LoxZYoeakZzksoQ"
					/>
				</div>
			</div>
		</section>
	);
}
