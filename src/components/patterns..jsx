import './patterns.css'
import top1 from '../img/top1.png'
import top2 from '../img/top2.png'

export function Patterns() {
	return (
		<div className='patterns'>
			<img src={top1} id='top1' />
			<img src={top2} id='top2' />
		</div>
	)
}