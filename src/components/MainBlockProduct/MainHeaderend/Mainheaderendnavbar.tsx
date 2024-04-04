import React from 'react'
import './Mainheaderendnavbar.css'
import vector from '../.././../image/Vector.svg'
const Mainheaderendnavbar: React.FC = () => {
	return (
		<div id='mainheader'>
			<div className='container'>
				<div className='mainheader'>
					<div className='mainheaderakvi'>
						<h1>Скидка на все велосипеды -20%</h1>
						<p>
							Детские велосипеды для летнего сезона. Скидки -20% при заказе от
							15 000 руб. В подарок гарантия на 2 года без переплаты.
						</p>
						<button>Подробнее</button>
					</div>
					<div className='headermainimage'>
						<img src={vector} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mainheaderendnavbar
