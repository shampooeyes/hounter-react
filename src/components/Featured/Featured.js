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
                "imageUrl": "../../assets/home-5.png",
                "avatarUrl": "../../avatar-1.png"
            },
            {
                "title": "Woodlandside",
                "price": "22.000.000",
                "owner": "Robert Fox",
                "location": "San Jose, South Dakota",
                "badge": "bestDeals",
                "imageUrl": "../../assets/home-5.png",
                "avatarUrl": "../../assets/avatar-2.png"
            },
            {
                "title": "The Old Lighthouse",
                "price": "44.000.000",
                "owner": "Ronald Richards",
                "location": "Santa Ana, Illinois",
                "badge": "newHouse",
                "imageUrl": "../../assets/home-5.png",
                "avatarUrl": "../../assets/avatar-3.png"
            }
        ],
        "villa": [],
        "apartment": []
    };
    const getListings = (tab) => {
        let currentListings = listings[tab];
        return currentListings.map((listing) => {
            return <Listing
                type={listing["badge"]}
                avatar={require(`${listing["avatarUrl"]}`)}
                title={listing["title"]}
                price={listing["price"]}
                location={listing["location"]}
                name={listing["owner"]}
                imageUrl={require(`${listing["imageUrl"]}`)} />

        });
    };

    // let activeListings = getListings(currentTab);

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

                        <div class="row d-flex">
                            {/* {activeListings} */}
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;