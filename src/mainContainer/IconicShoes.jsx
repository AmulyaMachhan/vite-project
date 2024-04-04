import  { useState } from 'react';
import './mainContainer.css';

function IconicShoes() {
    const itemsData = [
        { image: "/vite-project/src/assets/img/shoes-1.png", name: "Air Force 1" },
        { image: "/vite-project/src/assets/img/shoes-2.png", name: "Air Jordan 1" },
        { image: "/vite-project/src/assets/img/shoes-3.png", name: "Air Max" },
        { image: "/vite-project/src/assets/img/shoes-4.png", name: "Dunk" },
        { image: "/vite-project/src/assets/img/shoes-5.png", name: "Nike Blazer" },
        { image: "/vite-project/src/assets/img/shoes-6.png", name: "Metcon" },
        { image: "/vite-project/src/assets/img/shoes-7.png", name: "Pegasus Running Shoes" },
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
