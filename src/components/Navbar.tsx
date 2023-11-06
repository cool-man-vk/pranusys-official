import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const options = [
    {option: 'Home', link: '/'},
    {option: 'About', link: '/#about'},
    {option: 'Services', link: '/#services'},
    {option: 'Expertise', link: '/#expertise'},
    {option: 'Testimonials', link: '/#testimonials'},
    {option: 'Clients & Partnerships', link: '/#clients'},
    {option: 'Contact', link: '/contact'}
  ];

  return (
    <div>
      <section className="top-nav">
        <div>
          <Link to='/' className='no-underline text-white text-[20px]'>
                <h3>PranuSys</h3>
          </Link>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <div className='menu-button'></div>
        </label>
        <ul className="menu">
          {
            options.map((item) => {
              return (
                <a href={item.link} className='no-underline hover:text-[#a416ea]  transition-[1s] text-white text-[16px] ml-[12px] mr-[12px]'>
                          <li>{item.option}</li>
                </a>
              );
            })
          }
        </ul>
      </section> 
    </div>
    
  )
}

export default Navbar