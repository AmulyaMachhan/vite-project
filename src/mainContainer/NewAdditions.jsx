import './mainContainer.css'
import flyBy from '../assets/img/niky-flyby.png'

function NewAdditions(){
    return(
        <section className="new-addition-container">
            <div className="card-container">
                <h1>Dont Miss</h1>
                <div className="card-content">
                    <div className="card-image">
                        <img src={flyBy} alt="" />
                    </div>
                    <div className="about-card">
                        <span className="item-name">
                            Nike Dynamo 2 EasyOn
                        </span>
                        <p>
                            NIKE EASYON AND GO
                        </p>
                        <span className="item-about">
                            Nike EasyOn -- Designed to put on and get going
                        </span>
                    </div>
                    <div className="card-buttons">
                        <button>Shop</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewAdditions