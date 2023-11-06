import React from 'react';


const Card = (props:any) => {
    return (
        <div className='border-[grey] border-2 mx-[12px] my-[18px] rounded-[10px] text-center p-[18px] w-[280px] h-[320px]'>
            <img src={props.img} alt={props.name} className='w-[120px] h-[120px] mx-auto' />
            <h2 className='text-[20px] font-bold my-[12px]'>{props.name}</h2>
            <p className='text-[16px] my-[10px]'>{props.desc}</p>
        </div>
    )
}

export default Card