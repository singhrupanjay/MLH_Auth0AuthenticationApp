// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel.css';

const MyCarousel = () => {
    return (
        <Carousel>
            <div class="img1">
                <img src="https://cdn.pixabay.com/photo/2022/06/28/08/44/store-7289198_640.png" alt="Slide 1" />
                {/* <p className="legend">Slide 1</p> */}
            </div>
            <div class="img2">
                <img src="https://cdn.pixabay.com/photo/2022/06/24/01/49/pixel-art-7280889_1280.png" alt="Slide 2" />
                {/* <p className="legend">Slide 2</p> */}
            </div>
            <div class="img3">
                <img src="https://cdn.pixabay.com/photo/2022/06/23/16/54/pixel-art-7280230_1280.png" alt="Slide 3" />
                {/* <p className="legend">Slide 3</p> */}
            </div>
        </Carousel>
    );
};

export default MyCarousel;
