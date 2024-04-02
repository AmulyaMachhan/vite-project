import './mainContainer.css'

function MemberBenefits(){
    return(
        <section className="member-container">
        <h1>Member Benefits</h1>
        <div className="member-content">
            <div className="member-items">
                <div className="background-image">
                    <img src="images/member.png" alt="" />
                </div>
                <div className="member-about">
                    <h3>Member Product</h3>
                    <p>Your Exclusive Access</p>
                    <button>Shop</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src="images/member-2.png" alt="" />
                </div>
                <div className="member-about">
                    <h3>Nike By You</h3>
                    <p>Your Customisation Service</p>
                    <button>Customize</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src="images/member-3.png" alt="" />
                </div>
                <div className="member-about">
                    <h3>Member Rewards</h3>
                    <p>How We Say Thank You</p>
                    <button>Celebrate</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src="images/member-4.png" alt="" />
                </div>
                <div className="member-about">
                    <h3>Member Days</h3>
                    <p>A Celebration of You</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src="images/member-5.png" alt="" /> 
                </div>
                <div className="member-about">
                    <h3>Sport & Wellness Apps</h3>
                    <p>Movement Where You Are</p>
                    <button>Move</button>
                </div>
            </div>
            <div className="member-items">
                <div className="background-image">
                    <img src="images/member-6.png" alt="" />
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