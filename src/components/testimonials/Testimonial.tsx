import React from 'react'

const Testimonial = () => {
    const sayings = [
        {
            stars : 5,
            heading : 'Incredible results delivered',
            clientName : 'Chetan Dhanuka, Co-Founder 3Cube Technologies',
            desc: 'Incredible results delivered by Pranusys; their commitment to quality and security is unmatched'
        },
        {
            stars: 5,
            heading : 'Customer Satisfaction is their top priority',
            desc : 'Pranusys is transforming our vision into an exceptional software product, exceeding all expectations',
            clientName : 'Cinu Jones, Co-Founder 3Cube Technologies'
        },
        {
            stars: 4,
            heading : 'Cloud expertise streamlined operations seamlessly',
            desc: 'Choosing Pranusys was the best decision - their cloud expertise streamlined our operations seamlessly.',
            clientName : 'Jason Findlan, Co-Founder Chainwise'
        }
    ];
    return (
        <div id='testimonials' className='w-full h-auto p-[2%]'>
            <h1 className='text-[44px] p-[18px] text-center ssm:text-[35px]'>What our Clients say?</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {
                    sayings.map((saying, index) => {
                        return (
                            <div key={index} className='w-[500px] h-[280px] ssm:h-auto ssm:w-full m-[1%] text-justify p-[15px] border-2 border-gray-300 rounded-md'>
                                <div className='flex h-[40px] ssm:h-auto'>
                                    <div>
                                        {
                                            [...Array(saying.stars)].map((star, index) => {
                                                return (
                                                    <span key={index} className='text-[20px] text-yellow-400'>★</span>
                                                )
                                            })
                                            
                                        }
                                    </div>
                                    <div>
                                        {
                                            [...Array(5-saying.stars)].map((star, index) => {
                                                return (
                                                    <span key={index} className='text-[20px] text-gray-400'>★</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='h-[80px] ssm:h-auto'>
                                    <h1 className='text-[20px] ssm:text-[18px] p-[18px] font-bold'>{saying.heading}</h1>
                                </div>
                                <p className='text-[16px] p-[18px] ssm:text-[14px]'>{saying.desc}</p>
                                <h1 className='text-[16px] p-[18px] font-bold ssm:text-[14px]'>{saying.clientName}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonial