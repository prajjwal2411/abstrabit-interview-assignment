import './UpcomingEvents.scss';

export default function UpcomingEvents({title, company, info, date, deposit, tennure, interest, options}){
    return(
        <div className='py-7 border-b-2 border-b-header-border p-4'>
            <div className='mb-4'>
                <h1>{title}</h1>
            </div>
            <p className='text-gray-400 text-xs font-normal'>{info}</p>
            <div className="flex flex-row justify-start ">
                <div className='calendar-info'>
                    <div className='calendar-style'>
                        <h1 className='date-style'>
                            {date.getDate()}
                        </h1>
                        <p className='year-style'>
                            {date.toLocaleString('default', {month: 'short'})}, {date.getFullYear()}
                        </p>
                    </div>
                </div>
                <div className='ml-4'>
                    <div className=''>
                        <h1>{company}</h1>
                    </div>
                    <div className='flex flex-row justify-around company-info'>
                        <div className='pl-0 py-2 pr-2'>
                            <h1>Deposit Amt.</h1>
                            <p>Rs. {deposit}</p>
                        </div>
                        <div className='pl-0 py-2 pr-2'>
                            <h1>Tennure</h1>
                            <p>{tennure}</p>
                        </div>
                        <div className='pl-0 py-2 pr-2'>
                            <h1>Interest Rate</h1>
                            <p>{interest}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="action-group mt-5 mb-4">
                <button className='button-primary'>{options.button1}</button>
                <button className='button-secondary'>{options.button2}</button>
            </div>
        </div>
    )
}