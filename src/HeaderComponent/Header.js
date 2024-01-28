import './Header.scss';

import { HeaderLinksData, ProfileOptionsData } from '../data/SampleData';

import logo from '../assets/logo.png';

import { User, CaretDown, CaretUp } from "@phosphor-icons/react";

import { useState } from 'react';


function DropdownOptions({options}){
    return(
        <div className='border-b-2 border-b-header-border bg-white p-4 flex flex-row items-center text-global-blue'>
                <span className=''>
                    {options.icon}
                </span>
                <span className='flex flex-col mx-2'>
                    <p className='text-xs'>{options.info['infoOne']}</p>
                    <p className='text-xs'>{options.info['infoTwo']}</p>
                </span>
        </div>
        
    )
}

function ProfileOptions({icon, label}){
    return(
        <div className='bg-white p-4 flex flex-row items-center'>
                <span className=''>{icon}</span>
                <span className='mx-4'><p className=''>{label}</p></span>
        </div>
        
    )
}


function HeaderLinks({title, dropdownInfo}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick(event){
        if(event === 'Support'){
            setIsOpen(!isOpen);
        }
    }

    return(
        <>
            <div className='relative inline-block'>
                <h5 className='m-4 cursor-pointer' onClick={event => handleClick(title)}>{title}</h5>
                <div className='absolute w-max border-bl' style={{right:"15%"}}>
                    {isOpen && dropdownInfo?.map((info, infoIndex) => <DropdownOptions key={infoIndex} options={info} />)}
                </div>
            </div>
        </>
    )
}


function Header(isOpen)  {

    const [isProfileButtonOpen, setIsProfileButtonOpen] = useState(false);

    function handleProfileButtonClick(){
        console.log(isOpen)
        if(isOpen){

        }
        setIsProfileButtonOpen(!isProfileButtonOpen);
    }

    return(
        <>
        <div className='bg-white border-b-2 border-b-header-border'>
            <div className='h-20 container mx-auto flex flex-row justify-between'>
                <div className=''>
                    <img className='my-3' src={logo} align="middle" alt="Company Logo" />
                </div>
                <div className='header-options flex flex-row justify-between items-center'>
                    {HeaderLinksData.map((link, linkIndex) => <HeaderLinks title={link.label} key={linkIndex} dropdownInfo={link.dropdown} />)}
                    <div onClick={event => handleProfileButtonClick()} className='border-2 border-global-blue ml-6 p-1 px-2 rounded-3xl flex flex-row justify-between items-center shadow-xl cursor-pointer'>
                        <User size={32} className='fill-global-blue py-1' weight="fill" />
                        {isProfileButtonOpen ? 
                            <CaretUp size={18} className='fill-global-blue py-1' weight="bold" /> :
                            <CaretDown size={18} className='fill-global-blue py-1' weight="bold" /> 
                        }
                    </div>
                    {isProfileButtonOpen?
                        <span style={{top: "7%", left:"80%"}} className='absolute inline-block border-bl z-10'>
                            {ProfileOptionsData?.map((option, optionIndex) => <ProfileOptions key={optionIndex} icon={option.icon} label={option.label} /> )}
                        </span>: <></>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;