import './Faq.scss';

export default function Faq({title, content, link}){
    return(
        <div className='border-bl p-8'>
            <h1 className='my-3 text-2xl'>{title}</h1>
            <p className='my-3 text-sm'>{content}</p>
            <p className='my-1 underline decoration-1 decoration-global-blue text-global-blue text-base'>{link}</p>
        </div>
    )
}