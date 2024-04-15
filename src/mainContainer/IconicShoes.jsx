import  { useState } from 'react';
import './mainContainer.css';
import image1 from '../assets/img/shoes-1.png'
import image2 from '../assets/img/shoes-2.png'
import image3 from '../assets/img/shoes-3.png'
import image4 from '../assets/img/shoes-4.png'
import image5 from '../assets/img/shoes-5.png'
import image6 from '../assets/img/shoes-6.png'
import image7 from '../assets/img/shoes-7.png'

function IconicShoes() {
    const itemsData = [
        { image: image1, name: "Air Force 1" },
        { image: image2, name: "Air Jordan 1" },
        { image: image3, name: "Air Max" },
        { image: image4, name: "Dunk" },
        { image: image5, name: "Nike Blazer" },
        { image: image6, name: "Metcon" },
        { image: image7, name: "Pegasus Running Shoes" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const moveLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1));
    };

    const moveRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === itemsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="iconic-shoes-container">
            <h1>Always Iconic</h1>
            <div className="iconic-scroll">
                <div className="iconic-content">
                    <div className="carousel">
                        {itemsData.map((item, index) => (
                            <div className={`iconic-items ${index === currentIndex ? 'active' : ''}`} key={index}>
                                <img className="iconic-items-image" src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                    <button className="left" onClick={moveRight}>
                        <span>
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" strokeWidth="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
                            </svg>
                        </span>
                    </button>
                    <button className="right" onClick={moveLeft}>
                        <span>
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
                            </svg>
                        </span>
                    </button>
                    <div className="count-show">{currentIndex + 1}/{itemsData.length}</div>
                </div>
            </div>
        </section>
    );
}

export default IconicShoes;
