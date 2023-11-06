import React from 'react';
import { BsFiletypeJava, BsMicrosoft } from 'react-icons/bs';
import { IoLogoAngular } from "react-icons/io5";
import { RiReactjsFill } from 'react-icons/ri';
import { SiAmazonaws, SiAzuredevops, SiAzurefunctions, SiDotnet, SiFigma, SiFlutter, SiOpensourceinitiative, SiVisualstudio } from 'react-icons/si';


const Expertise = () => {
    const icons = [
        {
            name : 'Angular',
            icon : <IoLogoAngular size={50} color='red'/>
        }, 
        {
            name: 'React',
            icon: <RiReactjsFill size={50} color='#00FFFF'/>
        },
        {
            name: 'Azure Devops',
            icon: <SiAzuredevops size={50} color='#1100FF'/>
        },
        {
            name: 'Azure',
            icon : <BsMicrosoft size={50} />
        },
        {
            name: 'Java',
            icon : <BsFiletypeJava size={50}/>
        },
        {
            name: 'AWS',
            icon: <SiAmazonaws size={50} color='#FF0000'/>
        },
        {
            name: 'Microsoft .NET',
            icon: <SiDotnet size={50} />
        },
        {
            name: 'Azure Functions',
            icon: <SiAzurefunctions size={50} color='gold'/>
        },
        {
            name: 'Figma',
            icon : <SiFigma size={50} color='#DE6430'/>
        },
        {
            name: 'Flutter',
            icon: <SiFlutter size={50} color='#91ABFF' />
        },
        {
            name: 'Visual Studio',
            icon: <SiVisualstudio size={50} color='#5C2D91'/>
        },
        {
            name: 'OpenSource Initiative',
            icon: <SiOpensourceinitiative size={50} color='#006600'/>
        }
    ];
    
  return (
    <div id='expertise' className='w-full h-auto p-[1%]'>
        <h1 className='text-[44px] p-[18px] ssm:text-[35px] text-center'>Application Services and our Expertise</h1>
        <div className='flex flex-wrap justify-center items-center'>
            {icons.map((ic) => {
                return (
                    <div className='border-2 p-[15px] rounded-[15px] mx-[15px] my-[12px] w-[180px] h-[180px] text-center flex flex-col justify-center items-center'>
                                {ic.icon}
                                <div className='my-[8px] h-[50px]'>
                                    <h2 className='text-[20px]'>{ic.name}</h2>
                                </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Expertise