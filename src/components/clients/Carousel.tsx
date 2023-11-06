import React from 'react';
import './Carousel.css';
import cube3Img from '../../assets/clients/3cube.png';
import chainwiseImg from '../../assets/clients/chainwise.jpg';
import avaniralImg from '../../assets/clients/avaniral.png';
import globexImg from '../../assets/clients/globex.png';
import matrixAlphaImg from '../../assets/clients/matrix-alpha.png';
import relevantImg from '../../assets/clients/relevant.png';


const Carousel = () => {

  const images = [
    {
      name: 'Cube3 Technologies',
      img : cube3Img
    },
    {
      name : 'Chainwise',
      img : chainwiseImg
    },
    {
      name: 'Avaniral technologies',
      img: avaniralImg
    },
    {
      name: 'Globex Tech',
      img : globexImg
    },
    {
      name : 'MatrixAlpha',
      img : matrixAlphaImg
    },
    {
      name : 'Relevant',
      img : relevantImg
    }
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {
          images.map((img) => {
            return (
            <div className='slide'>
              <img src={img.img} alt={img.name} height="100" width="250"/>
            </div>);
          })
        }
      </div>
    </div>
  );
};

export default Carousel;