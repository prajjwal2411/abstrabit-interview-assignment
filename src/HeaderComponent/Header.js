import './Header.scss';

import logo from '../assets/logo.png';
import { User, CaretDown } from "@phosphor-icons/react";

function HeaderLinks({title}) {

    function handleClick(event){
        if(event === 'Support'){

        }
    }

    return(
        <h5 className='m-4 cursor-pointer' onClick={event => handleClick(title)}>{title}</h5>
    )
}


function Header()  {

    const headerLinks = [
        {
            'key': 0,
            'label': 'Dashboard',
        },
        {
            'key': 1,
            'label': 'FAQs',
        },
        {
            'key': 2,
            'label': 'Support',
        }
    ]

    return(
        <div className='bg-white border-b-2 border-b-header-border'>
            <div className='h-20 container mx-auto flex flex-row justify-between'>
                <div className=''>
                    <img className='my-3' src={logo} align="middle" alt="Company Logo" />
                </div>
                <div className='header-options flex flex-row justify-between items-center'>
                    {headerLinks.map((link, linkIndex) => <HeaderLinks title={link.label} key={link.key}/>)}
                    <div className='border-2 border-global-blue ml-6 p-1 px-2 rounded-3xl flex flex-row justify-between items-center shadow-xl cursor-pointer'>
                        <User size={32} className='fill-global-blue py-1' weight="fill" />
                        <CaretDown size={18} className='fill-global-blue py-1' weight="bold" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;