import './mainContainer.css'
import image1 from '../assets/img/member.png'
import image2 from '../assets/img/member-2.png'
import image3 from '../assets/img/member-3.png'
import image4 from '../assets/img/member-4.png'
import image5 from '../assets/img/member-5.png'
import image6 from '../assets/img/member-6.png'

function MemberBenefits(){
    return(
        <section className="member-container">
        <h1>Member Benefits</h1>
        <div className="member-content">
            <div className="member-items">
                <div className="background-image">
                    <img src={image1} alt="" />
                </div>
                <div className="member-about">
                    <h3>Member Product</h3>
                    <p>Your Exclusive Access</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src={image2} alt="" />
                </div>
                <div className="member-about">
                    <h3>Nike By You</h3>
                    <p>Your Customisation Service</p>
                    <button>Customize</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src={image3} alt="" />
                </div>
                <div className="member-about">
                    <h3>Member Rewards</h3>
                    <p>How We Say Thank You</p>
                    <button>Celebrate</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src={image4} alt="" />
                </div>
                <div className="member-about">
                    <h3>Member Days</h3>
                    <p>A Celebration of You</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src={image5} alt="" /> 
                </div>
                <div className="member-about">
                    <h3>Sport & Wellness Apps</h3>
                    <p>Movement Where You Are</p>
                    <button>Move</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src={image6} alt="" />
                </div>
                <div className="member-about">
                    <h3>SNKRS</h3>
                    <p>Your Ultimate Sneaker Community</p>
                    <button>Explore</button>
                </div>
            </div>
        </div>
    </section>
    )
}
export default MemberBenefits