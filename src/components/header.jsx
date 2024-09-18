import { useState } from 'react';
import './header.css';

export function Header() {
	const gmail = 'pacomariano28@gmail.com';

	const [showModal, setShowModal] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(gmail).then(() => {
			setShowModal(true);
			setTimeout(() => {
				setShowModal(false);
				// window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + gmail;
			}, 2000);
		}).catch(err => {
			console.error("Error al copiar al portapapeles", err);
		});
	};

	return (
		<section className="header d-flex justify-content-center align-items-center col-4">
			<div className='header d-flex justify-content-center '>
				<a href="https://github.com/pacomariano28" className="d-flex gap-2 align-items-center headerChild">
					<svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_181_1515)">
							<path d="M6.30322 9.82933C6.30322 8.96032 6.63527 8.12691 7.22632 7.51243C7.81736 6.89795 8.619 6.55273 9.45486 6.55273H28.3647C29.2006 6.55273 30.0022 6.89795 30.5933 7.51243C31.1843 8.12691 31.5164 8.96032 31.5164 9.82933V29.4889C31.5164 30.3579 31.1843 31.1913 30.5933 31.8058C30.0022 32.4203 29.2006 32.7655 28.3647 32.7655H9.45486C8.619 32.7655 7.81736 32.4203 7.22632 31.8058C6.63527 31.1913 6.30322 30.3579 6.30322 29.4889V9.82933Z" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12.6067 18.0215V26.213" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12.6067 13.1064V13.1228" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M18.9099 26.213V18.0215" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M25.2132 26.213V21.2981C25.2132 20.4291 24.8811 19.5957 24.2901 18.9812C23.6991 18.3667 22.8974 18.0215 22.0616 18.0215C21.2257 18.0215 20.4241 18.3667 19.833 18.9812C19.242 19.5957 18.9099 20.4291 18.9099 21.2981" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_181_1515">
								<rect width="37.8197" height="39.3191" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<span className='fw-bolder'>LinkedIn</span>
				</a>

				<a className="d-flex gap-2 align-items-center headerChild">
					<svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.25 27.8747C4.44167 30.1497 4.44167 23.8122 1.75 22.9997M20.75 31.1247V25.4372C20.75 23.8122 20.9083 23.1622 19.9583 22.1872C24.3917 21.6997 28.6667 19.9122 28.6667 12.4372C28.6647 10.4953 27.9265 8.63036 26.6083 7.23724C27.2266 5.55043 27.1697 3.68113 26.45 2.03724C26.45 2.03724 24.7083 1.54974 20.9083 4.14974C17.6898 3.28944 14.3102 3.28944 11.0917 4.14974C7.29167 1.54974 5.55 2.03724 5.55 2.03724C4.83035 3.68113 4.77343 5.55043 5.39167 7.23724C4.07347 8.63036 3.33526 10.4953 3.33333 12.4372C3.33333 19.9122 7.60833 21.6997 12.0417 22.1872C11.0917 23.1622 11.0917 24.1372 11.25 25.4372V31.1247" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<span className='fw-bolder'>GitHub</span>
				</a>

				<a className="d-flex gap-2 align-items-center headerChild" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
					<svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_181_1510)">
							<path d="M4.75 11.375C4.75 10.513 5.08363 9.6864 5.6775 9.0769C6.27136 8.46741 7.07681 8.125 7.91667 8.125H30.0833C30.9232 8.125 31.7286 8.46741 32.3225 9.0769C32.9164 9.6864 33.25 10.513 33.25 11.375V27.625C33.25 28.487 32.9164 29.3136 32.3225 29.9231C31.7286 30.5326 30.9232 30.875 30.0833 30.875H7.91667C7.07681 30.875 6.27136 30.5326 5.6775 29.9231C5.08363 29.3136 4.75 28.487 4.75 27.625V11.375Z" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M4.75 11.375L19 21.125L33.25 11.375" stroke="#EEB831" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_181_1510">
								<rect width="38" height="39" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<span className='fw-bolder'>Gmail</span>
				</a>
			</div>
			{showModal && (
				<div className='copiado'>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EDAC40" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
						<path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
					</svg>
					 Correo copiado
				</div>
			)}

		</section>
	);
}