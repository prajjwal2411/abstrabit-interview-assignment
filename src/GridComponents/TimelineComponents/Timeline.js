import './Timeline.scss';

import { TimelineData } from "../../data/SampleData";

function Months({indexYear, indexMonth, monthName, year}){
    return(
        <>
            <div className="border-white-custom">
                <p className="text-sm text-center border-b-2">{monthName}</p>
                {/* <p className="text-xs text-center border-b-2">{indexYear}{indexMonth}</p> */}
            </div>
        </>
    )
}


function Years({indexYear, color, year}){
    return(
        <>  
            <div style={{backgroundColor: color}} className="grid grid-cols-12 h-44 ">
                {TimelineData?.months?.map((month, monthIndex) => <Months key={monthIndex} year={year} indexYear={indexYear} indexMonth={monthIndex} monthName={month}/>)}
            </div>
        </>
    )
}


export default function Timeline(){
    return(
        <>
        <div className='relative'>
            <div className="flex flex-col">
                <span className="flex flex-row justify-around">{TimelineData?.yearInfo?.map((year, yearIndex) => <h1 key={yearIndex}>{year.year}</h1>)}</span>
                <div className="grid grid-cols-3 border-white-custom">
                    {TimelineData?.yearInfo?.map((year, yearIndex) => <Years key={yearIndex} year={year.year} indexYear={yearIndex} color={year.color}/>)}
                </div>
            </div>
            <div className='timeline-display utkarsh-fd ml-1'>Utkarsh FD 1</div>
            <div className='timeline-display shriram-fd ml-1'>Shriram FD Plan 2</div>
            <div className='timeline-display bajaj-finserve ml-1'>Bajaj Finserve FD 1</div>
            <div className='timeline-display mahindra-fd ml-1'>Mahindra FD Plan 2</div>
        </div>
        </>
    )
}