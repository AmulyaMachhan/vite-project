import './mainContainer.css'
import image1 from '../assets/img/sports.png'
import image2 from '../assets/img/sports-2.png'
import image3 from '../assets/img/sports-3.png'
import image4 from '../assets/img/sports-4.png'
import image5 from '../assets/img/sports-5.png'
function ShopBySports(){
    return (
        <section className="Shop-by-sports">
            <h1>Shop By Sports</h1>
            <div className="container">
                <div className="items">
                    <div className="items-image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="about-items">
                        <h3>Nike BasketBall</h3>
                        <span>Styles made for your game</span>
                    </div>
                    <div className="link">
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className="items">
                    <div className="items-image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="about-items">
                        <h3>Nike Golf</h3>
                        <span>Conquer any course in style</span>
                    </div>
                    <div className="link">
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className="items">
                    <div className="items-image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="about-items">
                        <h3>Nike Trail</h3>
                        <span>Gear that leads to wild places.</span>
                    </div>
                    <div className="link">
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className="items">
                    <div className="items-image">
                        <img src={image4} alt="" />
                    </div>
                    <div className="about-items">
                        <h3>Nike Tennis</h3>
                        <span>Serve up in style</span>
                    </div>
                    <div className="link">
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className="items">
                    <div className="items-image">
                        <img src={image5} alt="" />
                    </div>
                    <div className="about-items">
                        <h3>Nike Football</h3>
                        <span>Bring mad style to the pitch with the latest gear</span>
                    </div>
                    <div className="link">
                        <a href="">Shop</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopBySports