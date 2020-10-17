import React from 'react';
import './Works.css';
import Slider from "react-slick";
import sliderOne from '../../../images/carousel-1.png';
import sliderTwo from '../../../images/carousel-2.png';
import sliderFour from '../../../images/carousel-4.png';
import sliderFive from '../../../images/carousel-5.png';

const Works = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="works-bg mt-5 mb-5">
            <div className="text-center">
                <h2 className="text-white pt-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h2>
            </div>
            <div className="p-5">
                <Slider {...settings}>
                    <div>
                        <img src={sliderOne} className="img-fluid p-3 mt-3" alt="..." />
                    </div>
                    <div>
                        <img src={sliderTwo} className="img-fluid p-3 mt-3" alt="..." />
                    </div>
                    <div>
                        <img src={sliderFour} className="img-fluid p-3 mt-3" alt="..." />
                    </div>
                    <div>
                        <img src={sliderFive} className="img-fluid p-3 mt-3" alt="..." />
                    </div>
                    <div>
                        <img src={sliderOne} className="img-fluid p-3 mt-3" alt="..." />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Works;