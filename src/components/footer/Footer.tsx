import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const Footer = () => {
    const options = [
        {option: 'Home', link: '/'},
        {option: 'About', link: '#about'},
        {option: 'Services', link: '#services'},
        {option: 'Expertise', link: '#expertise'},
        {option: 'Testimonials', link: '#testimonials'},
        {option: 'Clients', link: '#clients'},
      ];

    const socials = [
        {
            icon: <BsLinkedin color='white' size={20}/>,
            link : 'https://www.linkedin.com/company/pranusys/'
        },
        {
            icon: <BsFacebook color='white' size={20}/>,
            link : 'https://www.facebook.com/pranusys/'
        },
        {
            icon: <BsTwitter color='white' size={20}/>,
            link : 'https://twitter.com/pranusys'
        },
        {
            icon: <BsInstagram color='white' size={20}/>,
            link : 'https://www.instagram.com/pranusys/'
        }
    ];

    const contactSection = [
        {
            title: 'Address',
            cnt: `No 1/15 (PL-156), MTHroad JeayamSakthi complex,
            Villivakkam, Ambattur,
            Tiruvallur, TamilNadu-600049, India`
        },
        {
            title: 'Phone',
            cnt: <div>
                India: <a href="tel:+91-9701467445" target='_blank' className="underline" rel="no noreferrer">+91-9701467445</a>
                <br/>
                USA: <a href="tel:+1-7272395342" className="underline" target='_blank' rel="no noreferrer">+1-7272395342</a>
                               
            </div>
        },
        {
            title: 'Email',
            cnt: (
                <div>
                    <a href="mailto:hr@pranusys.com" className="underline" target='_blank' rel="no noreferrer">
                        hr@pranusys.com
                    </a>
                </div>
            )
        }
    ];

    
    return (
        <div className='w-full h-auto bg-black text-white p-[1%]'>
            <div className='flex justify-between ssm:flex-wrap'>
                <div>
                    <div className='logo p-[20px]'>
                        <a href='/' className='no-underline text-white text-[22px]'>
                            <h3>PranuSys</h3>
                        </a>
                    </div>
                    <div className='p-[20px]'>
                        <h3 className='text-[20px] text-[#a975ea]'>Quick Links</h3>
                        <ul className='flex flex-col list-none'>
                            {
                                options.map((item) => {
                                return (
                                    <a href={item.link} className='no-underline text-white text-[16px] ml-[12px] mr-[12px] p-[3px]'>
                                        <li>{item.option}</li>
                                    </a>
                                );
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
                
                {/* Contact*/}
                <div className='p-[20px]'>
                    <h3 className='text-[20px] text-[#a975ea]'>Contact options</h3>
                    <div className='mx-[8%]'>
                        <div className='py-[5px]'>
                            {
                                contactSection.map((item) => {
                                    return (
                                        <div className='py-[10px]'>
                                            <h3 className='text-[18px]'>{item.title} :</h3>
                                            <p className='text-[16px] pl-[20px]'>
                                                {item.cnt}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Social Media */}
                <div>
                    <div className='flex ssm:justify-start flex-col p-[20px] h-full w-full'>
                        <h3 className='text-[20px] text-[#a975ea]'>Social Media</h3>
                        <div className='flex'>
                            {socials.map((item) => {
                                return (
                                    <a href={item.link} target='_blank' rel="noreferrer">
                                        <div className='w-[40px] h-[40px] rounded-[50%] hover:bg-[gold] bg-[#0051ff] my-[12px] mx-[12px] flex items-center justify-center'>
                                            {item.icon}
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[12px] p-[12px] text-center'>Copyright © 2023 PranuSys. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer