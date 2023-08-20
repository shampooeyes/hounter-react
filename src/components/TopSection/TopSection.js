import "./TopSection.css";

const TopSection = () => {
    return (
    <section className="top">
        <div className="row justify-content-between parent m-0">
            <div id="search-block" className="col-xl-6 block1 d-flex p-0 ps-5">
                <div className="infoBlock my-auto mx-auto">
                    <h1 className="mb-3">
                        Find The Place To<br />Live <span className="outlined-text">Your Dreams</span><br />Easily Here
                    </h1>

                    <p className="lead description mb-4">Everything you need about finding your place to live will
                        be<br />here,
                        where
                        it will be easier for you</p>

                    <div class="search-input-field">
                        <span className="me-3" style={{ "color": "#F59E0B" }}>
                            <i className="bi bi-geo-alt-fill "></i>
                        </span>
                        <input type="text" id="search-term" placeholder="Search for the location you want!" />
                        <a href="" className="ml-auto">
                            <div class="search-btn me-1">
                                Search<i class="bi bi-chevron-right"></i>
                            </div>
                        </a>
                    </div>
                    <div class="search-btn-xs">Go<i class="bi bi-chevron-right"></i></div>

                    <p class="lead description mt-4 mb-0">Our Partnership</p>

                    <div class="images">
                        <img src={require("../../assets/traveloka_logo.png")} alt="" />
                        <img src={require("../../assets/tiket_logo.png")} alt="" />
                        <img src={require("../../assets/airbnb_logo.png")} alt="" />
                        <img src={require("../../assets/tripadvisor_logo.png")} alt="" />
                    </div>
                </div>
            </div>

            <div class="col-xl-4 block2">
                <div class="bg-white pe-4 d-flex align-items-center mcard shadow">
                    <img src={require("../../assets/profile-pics.png")} alt="" class="me-2" />
                    <div>
                        <h4>1K+ People</h4>
                        <h5>Successfully Getting Home</h5>
                    </div>
                </div>

                <div class="bg-white px-4 d-flex align-items-center mcard1 shadow">
                    <img src={require("../../assets/home-2.png")} alt="" class="me-2" />
                    <div>
                        <h4>56 Houses</h4>
                        <h5>Sold Monthly</h5>
                    </div>
                </div>

                <div class="bg-white px-4 d-flex align-items-center mcard2 shadow">
                    <img src={require("../../assets/profile-pics-2.png")} alt="" class="me-2" />
                    <div>
                        <h4>4K+</h4>
                        <h5>User signed up</h5>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};

export default TopSection;