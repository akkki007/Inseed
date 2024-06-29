import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import place1 from '/placement.jpg'
import place2 from '/placement2.jpg'
import place3 from '/placement3.jpg'


const CarouselComp = () => {
    return (
        <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div>
                <img src={place1} alt="Slide 1" />
                <p className="legend">Placement</p>
            </div>
            <div>
                <img src={place2} alt="Slide 2" />
                <p className="legend">Placement</p>
            </div>
            <div>
                <img src={place3} alt="Slide 3" />
                <p className="legend">Placement</p>
            </div>
        </Carousel>
    );
};

export default CarouselComp;
