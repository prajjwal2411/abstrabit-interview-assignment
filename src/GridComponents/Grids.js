import './Grids.scss';

import BookingGrid from './BookingGridComponents/BookingGrid';
import Faq from './FaqComponent/Faq';

import { Chart } from "react-google-charts";
import { CaretRight, CaretLeft } from '@phosphor-icons/react';

import { BookingGridData, GraphData, FaqData } from '../data/SampleData';

export default function Grids() {
    
    return(
        <>
        <div>
            <div className='heading'>
                <h1 className='text-2xl my-6'>Welcome, Johan Paul</h1>
            </div>
            <div className='disp-grid template-columns gap-4'>
                <div className='border-bl p-4'>
                    <h4>Your FD Portfolio</h4>
                    <div>
                    <Chart className='chart-style'
                    chartType="PieChart"
                    data={GraphData}
                    />
                    </div>
                </div>
                <div className='border-bl span-2  p-4'>FD Maturity Timeline</div>
                <div className='disp-grid template-columns-finance span-2 gap-4'>
                    {BookingGridData.map((card, cardIndex) => <BookingGrid key={card.key} title={card.title} logo={card.logo} features={card.features} color={card.color} interest={card.interest} />)}
                </div>
                <div className='border-bl row-span p-4'>3</div>
                <div className='span-2'>
                    <div className='flex flex-row justify-between items-center p-4'>
                        <div className='my-3'>
                            <h1 className='text-2xl'>Get Answer</h1>
                            <p>to all your questions</p>
                        </div>
                        <div className='flex'>
                            <CaretLeft size={32} color="#afafb8" weight="bold" />
                            <CaretRight size={32} weight="bold" />
                        </div>
                    </div>
                    <div className='disp-grid template-columns-faqs gap-4'>
                        {FaqData.map((faq, faqIndex) => <Faq key={faqIndex} title={faq.title} content={faq.content} link={faq.link}/>)}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}