import React from 'react';
import './proyects.css';

const ProyectCard = ({ title, techs, text, image }) => {
	return (
		<article className="proyect-card d-flex flex-column flex-lg-row align-items-center justify-content-center card-gradient ps-4 ps-lg-0 gap-5">
			<div className="image-container float col-10 col-lg-3 col-md-9 mb-4 mb-lg-0">
				<img src={image} alt="proyect img" className='img-fluid rounded-4' />
			</div>

			<div className="col-12 col-lg-7">
				<h3 className='fw-bold text-light'>{title}</h3>
				<div className="techs-container d-flex gap-3 mt-3">
					{techs.map((tech, index) => (
						<div key={index} className={`tech-pill ${tech.toLowerCase()}`}>
							<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`} alt={`${tech} logo`} className="tech-logo" />
							<span>{tech}</span>
						</div>
					))}
				</div>
				<p className='mt-3'>{text}</p>
			</div>
		</article>

	);
};

export default ProyectCard;
