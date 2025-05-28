import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: (i) => {
            // Project names for the dots
            const projectNames = ["Project 1", "Project 2", "Project 3"];
            return (
                <button style={{ padding: "5px 10px", fontSize: "14px" }}>
                    {projectNames[i]}
                </button>
            );
        },
    };

    return (
        <Slider {...settings}>
            <div>
                <h3>Project 1</h3>
                <p>This is a description of Project 1.</p>
            </div>
            <div>
                <h3>Project 2</h3>
                <p>This is a description of Project 2.</p>
            </div>
            <div>
                <h3>Project 3</h3>
                <p>This is a description of Project 3.</p>
            </div>
        </Slider>
    );
};

export default ProjectsCarousel;


