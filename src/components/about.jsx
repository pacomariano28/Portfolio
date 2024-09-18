import './about.css'

export function About() {
	return (
		<section className='container mb-5 col-12 about mb-3'>
			<article className='d-flex flex-lg-row flex-column align-items-center justify-content-center w-100 gap-5'>
				<aside className='d-flex flex-column order-2 order-lg-1 col-10 col-lg-6'>
					<h2 className='fw-bold gradient aboutTitle '>ABOUT ME</h2>
					<p className='text-light'>
						Me llamo Francisco pero mis amigos me llaman Paco
						Empecé en la programación con un Amstrad,
						tenía 10 años. Actualmente estoy liderando
						equipos de desarrollo en multinacionales. Me llamo Francisco pero mis amigos me llaman Paco
						Empecé en la programación con un Amstrad,
						tenía 10 años. Actualmente estoy liderando
						equipos de desarrollo en multinacionales.
					</p>
				</aside>

				<img className='col-lg-2 col-6 col-md-4 order-1 order-lg-2 image about_img' src="https://cdn.intra.42.fr/users/bb7e4e90140bf5eb75ba0d5040599a25/frmarian.jpg" alt="" />
			</article>

			<svg className="curva3" width="86" height="81" viewBox="0 0 86 81" fill="none" xmlns="http://www.w3.org/2000/svg">
				<mask id="path-1-outside-1_199_1091" maskUnits="userSpaceOnUse" x="0" y="0" width="86" height="81" fill="black">
					<rect fill="white" width="86" height="81"></rect>
					<path d="M5 0L86 0V76H35C18.4315 76 5 62.5685 5 46V0Z"></path>
				</mask>
				<path d="M5 0L86 0L5 0ZM86 81H35C15.67 81 0 65.33 0 46H10C10 59.8071 21.1929 71 35 71H86V81ZM35 81C15.67 81 0 65.33 0 46V0L10 0V46C10 59.8071 21.1929 71 35 71V81ZM86 0V76V0Z" fill="#e07a43" mask="url(#path-1-outside-1_199_1091)"></path>
			</svg>
		</section>
	);
}
