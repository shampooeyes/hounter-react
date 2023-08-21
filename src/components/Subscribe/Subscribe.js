import './Subscribe.css';

const Subscribe = () => {
    return (
        <section class="subscribe-bg position-relative">
            <div>
                <img class="dec1" src={require("../../assets/avatar-3.png")} alt=""
                    style={{position: "absolute", top: "71px", left: "206px", border: "2px solid white", borderRadius: "20px"}} />
                <img class="dec2" src={require("../../assets//avatar-1.png")} alt=""
                    style={{"position": "absolute", top: "173px", left: "67px", border: "2px solid white", borderRadius: "20px",}} />
                <img class="dec3" src={require("../../assets//chair-1.png")} alt=""
                    style={{"position": "absolute", top: "38px", left: "44px",}} />
                <img class="dec4" src={require("../../assets//avatar-home.png")} alt=""
                    style={{"position": "absolute", top: "178px", left: "195px",}} />

                <img class="dec5" src={require("../../assets/avatarBuilding.png")} alt=""
                    style={{"position": "absolute", top: "44px", right: "200px",}} />
                <img class="dec6" src={require("../../assets/avatar-6.png")} alt=""
                    style={{"position": "absolute", top: "143px", right: "200px",}} />
                <img class="dec7" src={require("../../assets/avatar-5.png")} alt=""
                    style={{"position": "absolute", top: "107px", right: "82px",}} />
                <img class="dec8" src={require("../../assets/chair-2.png")} alt=""
                    style={{"position": "absolute", bottom: "60px", right:"73px",}} />
            </div>
            <div class="subscribe">
                <h2 class="subscribe-header">Subscribe For More Info And Update From Hounter</h2>
                <div class="subscribe-input-field bg-white border-0">
                    <span class="me-3" style={{"color": "#3B82F6"}}>
                        <i class="bi bi-envelope-fill"></i>
                    </span>
                    <input type="text" id="search-term" placeholder="Your email here!" />
                    <a href="" id="lg-subscribe-btn">
                        <div class="subscribe-btn me-1 ">
                            Subscribe Now
                        </div>
                    </a>
                </div>

                <a href="" id="sm-subscribe-btn">
                    <div class="subscribe-btn me-1 ">
                        Subscribe Now
                    </div>
                </a>
            </div>

        </section>
    );

};

export default Subscribe;