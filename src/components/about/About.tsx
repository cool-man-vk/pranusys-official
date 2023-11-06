import React from 'react';
import aboutImg from '../../assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full h-auto flex flex-row ssm:flex-col p-[1%]'>
        <div className='h-full w-full m-auto'>
            <img src={aboutImg} alt='about' className='w-full h-full'/>
        </div>
        <div className='h-full w-full'>
            <div className='mx-[10%] my-[15%] text-justify'>
                <h2 className='text-[28px] font-bold ssm:text-[22px]'>Unveiling Innovation, Engineering Excellence, and People-Centric Solutions!</h2>
                <p className='text-[18px] mt-[15px] ssm:mt-[2] ssm:text-[16px]'>
                  At PranuSys, we are more than just a software company. We are a collective of like-minded 
                  engineers who are not only passionate about product development but are also adept at 
                  crafting exceptional solutions for both web and mobile platforms. With a wealth of 
                  experience in assisting customers in seamlessly transitioning their on-premise 
                  workloads to the cloud, 
                  we bring a holistic approach to technology transformation.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About