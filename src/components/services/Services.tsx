import React from 'react';
import Card from './card/Card';
import productDevImg from '../../assets/product-dev.png';
import cloudImg from '../../assets/cloud.png';
import affordableImg from '../../assets/affordable.png';


const Services = () => {
  const cardDetails = [
    {
      name: 'Product Development',
      desc: 'Transforming Ideas into Innovative Products and your Partner in Product Development Excellence.',
      img: productDevImg
    },
    {
      name: 'Cloud Migrations',
      desc: 'Seamless Cloud Migrations and Business to the Cloud with Confidence',
      img: cloudImg
    },
    {
      name: 'Affordable Excellence',
      desc: 'Affordable Excellence and Elevating Standards at your Costs.',
      img: affordableImg
    }
  ]
  return (
    <div id='services' className='w-full h-auto p-[1%]'>
        <h1 className='text-[44px] p-[18px] ssm:text-[35px] text-center'>What We Offer?</h1>
        <div className='services flex flex-wrap justify-around items-center'>
            {
              cardDetails.map((card) => {
                return (
                  <Card name={card.name} desc={card.desc} img={card.img} />
                );
              })
            }
        </div>
    </div>
  )
}

export default Services