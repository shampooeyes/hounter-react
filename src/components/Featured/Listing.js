import './Listing.css';
import Badge from './Badge';

const Listing = (props) => {
    return (
        <div class="col-xl-4 col-5 list-card">
            <div className='position-relative text-start'>
                <img src={`${props.imageUrl}`} alt="" className='imgLarge'/>
                <Badge type={props.type} />
            </div>
            <div className='d-flex flex-column align-items-start text-start'>
                <h3 class="listing-title">{props.title}</h3>
                <div class="display-4 mb-3">$ {props.price}</div>
                <div className='d-flex'>
                    <img src={props.avatar} className='avatar me-2' alt="" height={40} width={40} />
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