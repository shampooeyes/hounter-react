import Listing from "./Listing";
import { useEffect, useState } from "react";
import './Featured.css';
import { useIsFocused } from '@react-navigation/native'

const Featured = () => {
const isFocused = useIsFocused()
    const [activeListings, setActiveListings] = useState([]);

    useEffect(() => {
        if (isFocused)
        fetch('https://64e25700ab0037358818efc3.mockapi.io/listings').then(response => {
            response.json().then((json) => {

                setActiveListings( json.map((listing) => {
                    return <Listing
                        type={listing["badgeType"]}
                        avatar={`${listing["avatarUrl"]}`}
                        title={listing["title"]}
                        price={listing["price"]}
                        location={listing["location"]}
                        name={listing["owner"]}
                        imageUrl={`${listing["imageUrl"]}`} 
                        key={listing['title']}/>
        
                }));
            });
        });
    }, [isFocused]);

    return (
        <div className="d-flex">
            <section className="featured">
                <div class="display-6 mb-3 text-start">--- Our Recommendations</div>
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
                            {activeListings}
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;