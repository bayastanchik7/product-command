import React from 'react'
import './Mainheadernavbar.css'
import logos from '../../../image/logos.png'
import { AiOutlineUser } from 'react-icons/ai'

const Mainheadernavbar: React.FC = () => {
	return (
		<div id='Mainheader'>
			<div className='container'>
				<div className='Mainheader'>
					<img src={logos} alt='' />
					<div className='Mainheadericon'>
						<AiOutlineUser className='admin-icon' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mainheadernavbar
