import './Listing.css';
import Badge from './Badge';
import { Container } from "react-bootstrap";

const Listing = (props) => {
    return (
        <div class="col-xl-4 col-sm-6 col-5 list-card">
            <Container className='position-relative'>
                <img src={require("../../assets/home-5.png")} alt="" />
                <Badge type={props.type} />
            </Container>
            <div>
                <h3 class="listing-title">{props.title}</h3>
                <div class="display-4 mb-3">$ {props.price}</div>
                <div className='d-inline'>
                    <img src={require("../../assets/avatar-5.png")} alt="" />
                    <div className="profile-info d-inline" >
                        <span class="display-3">{props.name}</span>
                        <span class="display-5 d-block">{props.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;