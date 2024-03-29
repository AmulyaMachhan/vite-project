import './mainContainer.css'
import featured from '../assets/img/featured.png'
import featured_1 from '../assets/img/featured-2.png'
import featured_2 from '../assets/img/featured-3.png'

function Featured(){
    return(
        <section className="featured-container">
            <h1>Featured</h1>
            <div className="featured-content">
                <div className="featured-items">
                    <img src={featured} alt="" />
                    <p>Womens Air Max</p>
                </div>
                <div className="featured-items">
                    <img src={featured_1} alt="" />
                    <p>Mens Air Max</p>
                </div>
                <div className="featured-items">
                    <img src={featured_2} alt="" />
                    <p>Kids Air Max</p>
                </div>
            </div>
        </section>
    ) 
}

export default Featured