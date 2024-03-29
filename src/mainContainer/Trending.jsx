import './mainContainer.css'
import trendingImage from '../assets/img/trending.png'
import trendingImage_2 from '../assets/img/trending-2.png'
function Trending(){
    return(
        <section className="trending-container">
            <h1>Trending</h1>
            <div className="trending-content">
                <div className="trending-items">
                    <div className="background-image">
                        <img src={trendingImage} alt="" />
                    </div>
                    <div className="trending-about">
                        <h3>Nike Metcon 9</h3>
                        <p>For lifters, trainers, go-getters. From deadlifts to squats, box jumps to rows.</p>
                        <button>Shop</button>
                    </div>
                </div>
                <div className="trending-items">
                    <div className="background-image">
                        <img src={trendingImage_2} alt="" />
                    </div>
                    <div className="trending-about">
                        <h3>Retro Running Shoes</h3>
                        <button>Shop</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending