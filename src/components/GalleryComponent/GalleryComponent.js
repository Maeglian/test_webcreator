import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./GalleryComponent.css";
import leftArrow from "./../../images/leftArrow.svg";
import rightArrow from "./../../images/rightArrow.svg";

const GalleryComponent = ({title, images, slidesPerView}) => {
    console.log(leftArrow);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: slidesPerView,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
        },
    };

    const inner = images.map((img, idx) => {
        return (
            <div>
                <img src={require(`./../../images/${img}`)} alt="" />
            </div>
        )
    });
    
    return (
        <>
            <h1>
                {title}
            </h1>
            <Carousel 
                responsive={responsive}
                showDots={true}
                infinite={true}
                itemClass="gallery-item"
                dotListClass="gallery-dots"
                customLeftArrow={<img src={leftArrow} alt="" />}
                customRightArrow={<img src={rightArrow} alt="" />}
            >
                {inner}
            </Carousel>
        </>
    );
}

export default GalleryComponent;
