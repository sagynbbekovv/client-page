import React, {useState} from 'react';

const ImgSlider = ({slides}) => {
    const [currentIndex, setCurrendUser] = useState(0)

    const sliderStyles = {
        height: "100%",
        position: "relative",

        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }

    const slideStyles = {
        borderRadius: '5px',
        display: 'block',
        height: '300px',
        width: '100%',
        margin: '0 auto',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const dotStyles = {
        width: "65px",
        height: "65px",
        background: "#000",
        borderRadius: "8px",
        cursor: "pointer"
    }

    const dotStylesContainer = {
        display: "flex",
        gap: "10px",
    }

    const goToSlide = slideIndex => {
        setCurrendUser(slideIndex)
    }

    return (

        <div style={sliderStyles}>
            <div style={slideStyles}></div>

            <div style={dotStylesContainer}>
                {slides.map((slide, slideIndex) => (
                    <div
                         key={slideIndex} style={dotStyles}
                         onClick={() => goToSlide(slideIndex)}></div>
                ))}
            </div>
        </div>
    );
};

export default ImgSlider;