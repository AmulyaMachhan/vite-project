import './mainContainer.css'
import nikeLogo from '../assets/img/nike-image-1.jpg'
function Ad(){
    return(
        <div className="ad-container">
            <div className="card-container">
                <div className="card-content">
                    <div className="card-image">
                        <img src={nikeLogo} alt="" />
                    </div>
                    <div className="about-card">
                        <span className="item-name">Airmax 90 LV8</span>
                        <p>
                            DOUBLE STACKED.
                            <br />
                            DOUBLE FUN.
                        </p>
                        <span className="item-about">
                            Play all day, dance all night in elevated, eye-catching confort.
                            <br />
                            Introducing the all new AirMax 90 LV8, styled by NewJeans.
                        </span>
                    </div>
                    <div className="card-buttons">
                        <button>Shop NewJeans Picks</button>
                        <button>Shop Air Max 90 LV8</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Ad