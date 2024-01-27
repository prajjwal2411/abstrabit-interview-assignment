import './Grids.scss';

import finserve from '../assets/finserve.png';
import mahindra from '../assets/mahindra.png';
import srf from '../assets/srf.png';
import utkarsh from '../assets/utkarsh.png';

import { CaretRight, CaretLeft, CheckCircle } from '@phosphor-icons/react';
import { Chart } from "react-google-charts";

const bookingGridData = [
    {   
        'key': 1,
        'title': 'Utkarsh Small Finance Bank',
        'logo': {'img': utkarsh, 'height': 50, 'width': 50},
        'features': {
            'f1': 'Highest Interest Rate', 
            'f2': 'RBI Insured'
        },
        'interest': '9.10% p.a.',
        'color':{
            'buttonColor': '#58418C',
            'featureBgColor': '#EFDFFF',
            'bgColor': '#F8F0FF'
        }
    },
    {
        'key': 2,
        'title': 'Bajaj Finserve',
        'logo': {'img': finserve, 'height': 50, 'width': 50},
        'features': {
            'f1': 'Crisil AAA Rated',
            'f2': 'No Video KYC Required'
        },
        'interest': '8.80% p.a.',
        'color':{
            'buttonColor': '#1772BB',
            'featureBgColor': '#D7E9F8',
            'bgColor': '#EFF6FF'
        }
    },
    {
        'key': 3,
        'title': 'Shriram Finance',
        'logo': {'img': srf, 'height': 50, 'width': 50},
        'features': {
            'f1': 'Crisil AAA Rated',
            'f2': 'No Video KYC Required'
        },
        'interest': '8.80% p.a.',
        'color':{
            'buttonColor': '#010101',
            'featureBgColor': '#DEDEDE',
            'bgColor': '#F4F4F4'
        }
    },
    {
        'key': 4,
        'title': 'Mahindra Finance',
        'logo': {'img': mahindra, 'height': 110, 'width': 95},
        'features': {
            'f1': 'Crisil AAA Rated',
            'f2': 'No Video KYC Required'
        },
        'interest': '8.80% p.a.',
        'color':{
            'buttonColor': '#EA4E14',
            'featureBgColor': '#F8D6D7',
            'bgColor': '#FCEFEF'
        }
    }
]


function BookingGrid({unique, title, logo, features, interest, color}) {    
    return(
        <div className='border-bl p-2' key={unique}>
            <div className='p-2' style={{background: color.bgColor}}>
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

export default function Grids() {
    
    const data = [
        ["Investments", "Percentage"],
        ["Bajaj Finserve",25],
        ["Shriram Finance",20],
        ["Mahindra Finance",15],
        ["Utkarsh Small Finance Bank",40],
    ];

    return(
        <>
            <div>
                <div className='heading'>
                    <h1>Welcom, Johan Paul</h1>
                </div>
                <div className='disp-grid template-columns gap-4'>
                    <div className='border-bl p-4'>
                        <h4>Your FD Portfolio</h4>
                        <div>
                        <Chart className='chart-style'
                        chartType="PieChart"
                        data={data}
                        />
                        </div>
                    </div>
                    <div className='border-bl span-2  p-4'>FD Maturity Timeline</div>
                    {/** should be inside loop */}
                    <div className='disp-grid template-columns-finance span-2 gap-4'>
                        {bookingGridData.map((card, cardIndex) => <BookingGrid key={card.key} title={card.title} logo={card.logo} features={card.features} color={card.color} interest={card.interest} />)}
                    </div>
                    {/** should be inside loop */}
                    <div className='border-bl row-span  p-4'>3</div>
                    <div className='span-2'>
                        <div className='flex flex-row justify-between items-center p-4'>
                            <div>
                                <h1>Get Answer</h1>
                                <p>to all your questions</p>
                            </div>
                            <div className='flex'>
                                <CaretLeft size={32} color="#6e6e6e" weight="bold" />
                                <CaretRight size={32} weight="bold" />
                            </div>
                        </div>
                        <div className='disp-grid template-columns-faqs'>
                            <div className='border-bl p-4'>4.1</div>
                            <div className='border-bl p-4'>4.2</div>
                            <div className='border-bl p-4'>4.3</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}