import React from "react";
import "./GalleryComponent.css";

const GalleryComponent = ({title, images, slidesPerView}) => {   
    const inner = images.map((img) => {
        const cn = `gallery-item col-${slidesPerView}`

        return (
            <div className={cn}>
                <img src={require(`./../../images/${img}`)} alt="" />
            </div>
        )
    });

    return (
    <>
        <h1>{title}</h1>
        <div className="gallery">
            <ol className="gallery-indicators">
            </ol>
            <div className="gallery-slides">                
                {inner}
            </div>
            <a className="gallery-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="gallery-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </>
    )

};

export default GalleryComponent;