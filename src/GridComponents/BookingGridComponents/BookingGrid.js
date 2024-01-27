import './BookingGrid.scss';

import { CheckCircle } from '@phosphor-icons/react';

export default function BookingGrid({unique, title, logo, features, interest, color}) {    
    return(
        <div className='border-bl p-2' key={unique}>
            <div className='p-2 rounded-md' style={{background: color.bgColor}} >
                <div className='flex flex-row justify-start items-center'>
                    <img className='p-2' src={logo.img} height={logo.height} width={logo.width} alt={title} />
                    <h1 className='ml-2'>{title}</h1>
                </div>
                <div className='flex flex-row mt-4'>
                    <p className='flex items-center w-1/2 mx-4 py-2 px-4 rounded-lg text-sm float-right' style={{background: color.featureBgColor}}><CheckCircle className='float-left' size={24} color={color.buttonColor} weight="fill" />{features.f1}</p>
                    <p className='flex items-center w-1/2 mx-4 py-2 px-4 rounded-lg text-sm float-right' style={{background: color.featureBgColor}}><CheckCircle className='float-left' size={24} color={color.buttonColor} weight="fill" />{features.f2}</p>
                </div>
                <div className='flex flex-row justify-between mt-4 px-4'>
                    <div className=''>
                        <p className='sub-info'>Interest Upto</p>
                        <h5>{interest}</h5>
                    </div>
                    <button className='text-white px-4 rounded-lg' style={{background: color.buttonColor}}>Book Now</button>
                </div>
            </div>
        </div>
    )
}
