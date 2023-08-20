import Badge from "./Badge";
import Listing from "./Listing";
import './Featured.css';

const Featured = () => {
    let currentTab = "home";
    const listings = {
        "home": [
            {
                "title": "Downtown",
                "price": "12.000.000",
                "owner": "Jack Williams",
                "location": "Toronto, Ontario",
                "badge": "popular",
                "imageUrl": "",
                "avatarUrl": ""
            },
            {
                "title": "Woodlandside",
                "price": "22.000.000",
                "owner": "Robert Fox",
                "location": "San Jose, South Dakota",
                "badge": "bestDeals",
                "imageUrl": "",
                "avatarUrl": ""
            },
            {
                "title": "The Old Lighthouse",
                "price": "44.000.000",
                "owner": "Ronald Richards",
                "location": "Santa Ana, Illinois",
                "badge": "newHouse",
                "imageUrl": "",
                "avatarUrl": ""
            }
        ],
        "villa": [],
        "apartment": []
    };
    const getListings = (tab) => {
        const currentListings = listings[tab];
        return currentListings.map((listing) => {
            <Listing 
            type={tab["badge"]}
            avatar={require(tab["avatarUrl"])} 
            title={tab["title"]} 
            price={tab["price"]} 
            location={tab["location"]}
            name= {tab["owner"]} 
            imageUrl={require(tab["imageUrl"])} />

        });
    };

    const activeListings = () => {
      return getListings(currentTab);  
    };

    return (
        <div className="d-flex">
            <section className="featured">
                <div class="display-6 mb-3">--- Our Recommendations</div>
                <div class="feat-row d-flex justify-content-between align-items-center mb-5">
                    <h2 class="d-flex m-0">Featured House</h2>
                    <div class="d-flex align-items-center">
                        <ul class="nav nav-tabs justify-content-center border-0 m-0">
                            <li>
                                <a class="bi bi-house-door-fill filter-pill" id="homeTab" data-toggle="tab" href="#home">
                                    <span class="navtag">Home</span>
                                </a>
                                <p class="text-center pt-3">Home</p>
                            </li>
                            <li class="mx-5">
                                <a class="bi bi-buildings filter-pill" data-toggle="tab" href="#villa">
                                    <span class="navtag">Villa</span>
                                </a>
                                <p class="text-center pt-3">Villa</p>
                            </li>
                            <li>
                                <a class="bi bi-building filter-pill" data-toggle="tab" href="#apt">
                                    <span class="navtag">
                                        Apartment
                                    </span>
                                </a>
                                <p class="text-center pt-3">Apartment</p>
                            </li>
                        </ul>
                    </div>


                    <div class="nav-buttons d-flex">
                        <div class="nav-btns nav-back me-3">
                            <i class="bi bi-arrow-left-short d-flex"></i>
                        </div>

                        <div class="nav-btns nav-forward">
                            <i class="bi bi-arrow-right-short d-flex"></i>
                        </div>
                    </div>
                </div>

                <div>

                    <div class="tab-content listing">
                        <div class=" tab-pane fade active show" id="home">
                            <div class="row d-flex">
                        {/* {activeListings} */}

                                <Listing type="popular" avatar={require("../../assets/avatar-1.png")} title="Downtown" price="12.000.000" location="Toronto, Ontario" name="Jack Williams" imageUrl={require("../../assets/home-5.png")} />

                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="newHouse" />
                                    <img src="./assets/images/home-4.png" alt="" class="" />
                                    <h3 class="listing-title">Woodlandside</h3>
                                    <div class="display-4 mb-3">$ 20.000.000</div>
                                    <img src="./assets/images/avatar-2.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Robert Fox</h4>
                                        <h5 class="display-5">San Jose, South Dakota</h5>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="bestDeals" />
                                    <img src="./assets/images/home-5.png" alt="" class="" />
                                    <h3 class="listing-title">The Old Lighthouse</h3>
                                    <div class="display-4 mb-3">$ 44.000.000</div>
                                    <img src="./assets/images/avatar-3.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Ronald Richards</h4>
                                        <h5 class="display-5">Santa Ana, Illinois</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="villa">
                            <div class="row d-flex">
                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="popular" />
                                    <img src="./assets/images/home-5.png" alt="" class="" />
                                    <h3 class="listing-title">Downtown</h3>
                                    <div class="display-4 mb-3">$ 12.000.000</div>
                                    <img src="./assets/images/avatar-5.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Jack Williams</h4>
                                        <h5 class="display-5">Toronto, Ontario</h5>
                                    </div>
                                </div>


                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="newHouse" />
                                    <img src="./assets/images/home-3.png" alt="" class="" />
                                    <h3 class="listing-title">Oaksville</h3>
                                    <div class="display-4 mb-3">$ 4.000.000</div>
                                    <img src="./assets/images/avatar-7.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Tyler Fox</h4>
                                        <h5 class="display-5">Brooklyn, New York</h5>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="bestDeals" />
                                    <img src="./assets/images/home-4.png" alt="" class="" />
                                    <h3 class="listing-title">Royal Oak</h3>
                                    <div class="display-4 mb-3">$ 13.000.000</div>
                                    <img src="./assets/images/avatar-6.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Charles Reynolds</h4>
                                        <h5 class="display-5">Encino, California</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="apt">

                            <div class="row d-flex">
                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="popular" />
                                    <img src="./assets/images/home-4.png" alt="" class="" />
                                    <h3 class="listing-title">Ashtonville</h3>
                                    <div class="display-4 mb-3">$ 17.000.000</div>
                                    <img src="./assets/images/avatar-4.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Serena Williams</h4>
                                        <h5 class="display-5">Redwood, California</h5>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="newHouse" />
                                    <img src="./assets/images/home-5.png" alt="" class="" />
                                    <h3 class="listing-title">Oaksville</h3>
                                    <div class="display-4 mb-3">$ 23.000.000</div>
                                    <img src="./assets/images/avatar-6.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Brandon Stone</h4>
                                        <h5 class="display-5">Hillcrest, Texas</h5>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-sm-6 col-5 list-card">
                                    <Badge type="bestDeals" />
                                    <img src="./assets/images/home-3.png" alt="" class="" />
                                    <h3 class="listing-title">County Highway</h3>
                                    <div class="display-4 mb-3">$ 21.000.000</div>
                                    <img src="./assets/images/avatar-3.png" alt="" class="position-absolute" />
                                    <div class="profile-info">
                                        <h4 class="display-3">Darton Hardwill</h4>
                                        <h5 class="display-5">Inlet Beach, Florida</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;