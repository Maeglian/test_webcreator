import React from "react";
import "./GalleryComponent.css";

const GalleryComponent = ({title, images, slidesPerView}) => {
    const indicators = Array.from({ length: slidesPerView }, (v, k) => k).map((num, i) => {
        const cn = (i === 0) ? "active" : "";

        return (
            <li data-target="#gallery" data-slide-to={i} className={cn}></li>
        );
    });  

    const inner = images.map((img, idx) => {
        let cn = `carousel-item col`;
        if (idx === 0) cn += " active";

        return (
            <div className={cn}>
                <img src={require(`./../../images/${img}`)} className="d-block w-100" alt="" />
            </div>
        )
    });
    
    return (
    <>
        <h1>{title}</h1>
        <div id="gallery" className="carousel slide">
            <ol className="carousel-indicators">
                {indicators}
            </ol>
            <div className="carousel-inner row-cols-md-3">
                {inner}
            </div>
            <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#gallery" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </>
    )

};

export default GalleryComponent;