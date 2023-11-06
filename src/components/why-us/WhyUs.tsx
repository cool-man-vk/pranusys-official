import React from 'react';
import { RiTeamLine } from "react-icons/ri";
import { SiPowervirtualagents } from "react-icons/si";
import {BsFillCloudUploadFill} from 'react-icons/bs';
import {MdPriceCheck} from 'react-icons/md';
import { MdStars } from "react-icons/md";

const WhyUs = () => {
    const contentDetails = [
        {
            name: 'Expert Team',
            icon: <RiTeamLine size={50} />
        },
        {
            name: 'Virtual Support',
            icon: <SiPowervirtualagents size={50}/>
        },
        {
            name: 'Cloud Pioneers',
            icon: <BsFillCloudUploadFill size={50}/>
        },
        {
            name: 'Affordable Pricing',
            icon: <MdPriceCheck size={50}/>
        },
        {
            name: 'Customer Satisfaction',
            icon : <MdStars size={50} />
        }
    ];
    return (
        <div id='whyus' className='w-full h-auto p-[1%]'>
            <h1 className='text-[44px] p-[18px] ssm:text-[35px] text-center'>Why PranuSys?</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {
                    contentDetails.map((content) => {
                        return (
                            <div className='border-2 p-[15px] rounded-[15px] mx-[15px] my-[12px] w-[180px] h-[220px] text-center flex flex-col justify-center items-center'>
                                {content.icon}
                                <div className='my-[8px] h-[50px]'>
                                    <h2 className='text-[20px]'>{content.name}</h2>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
  )
}

export default WhyUs