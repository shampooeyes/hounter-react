import ReactDOM from "react-dom";
import Modal from './Modal/Modal';
import './NewItem.css';
import { useEffect, useState } from "react";

const NewItem = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [owner, setOwner] = useState("");
    const [badgeType, setBadgeType] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const onPriceChange = (event) => {
        setPrice(event.target.value);
    };
    const onLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const onOwnerChange = (event) => {
        setOwner(event.target.value);
    };
    const onBadgeTypeChange = (event) => {
        setBadgeType(event.target.value);
    };
    const onImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };
    const onAvatarUrlChange = (event) => {
        setAvatarUrl(event.target.value);
    };

    useEffect(() => {
        if (!props.isNew) {
            let data = props.data;
            setTitle(data['title']);
            setPrice(data['price']);
            setLocation(data['location']);
            setOwner(data['owner']);
            setBadgeType(data['badgeType']);
            setImageUrl(data['imageUrl']);
            setAvatarUrl(data['avatarUrl']);
        }
    }, []);


    const onDelete = () => {
        props.onDelete(props.data['id']);
        props.exit();
    };

    const onSave = () => {
        const data = {
            "id": props.data['id'],
            "title": title,
            "price": price,
            "owner": owner,
            "location": location,
            "badgeType": badgeType,
            "imageUrl": imageUrl,
            "avatarUrl": avatarUrl
        };

        const requestOptions = {
            method: 'PUT',
            headers: { "Content-type": "application/json; charset=UTF-8", },
            body: JSON.stringify(data)
        };
        fetch(`https://64e25700ab0037358818efc3.mockapi.io/listings/${props.data['id']}`, requestOptions).then(() => { props.refresh(); });

        props.exit();
    };

    const onAdd = () => {
        const data = {
            "id": Math.random().toString(),
            "title": title,
            "price": price,
            "owner": owner,
            "location": location,
            "badgeType": badgeType,
            "imageUrl": imageUrl,
            "avatarUrl": avatarUrl
        };

        const requestOptions = {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8", },
            body: JSON.stringify(data)
        };
        fetch(`https://64e25700ab0037358818efc3.mockapi.io/listings`, requestOptions).then(() => { props.refresh(); });

        props.exit();
    }

    return ReactDOM.createPortal(
        <Modal exit={props.exit}>
            <InputField label="Title" value={title} onChange={onTitleChange} />
            <InputField label="Price" value={price} onChange={onPriceChange} />
            <InputField label="Location" value={location} onChange={onLocationChange} />
            <InputField label="Owner" value={owner} onChange={onOwnerChange} />
            <InputField label="Badge Type" value={badgeType} onChange={onBadgeTypeChange} />
            <InputField label="Image Url" value={imageUrl} onChange={onImageUrlChange} />
            <InputField label="Owner Image Url" value={avatarUrl} onChange={onAvatarUrlChange} />

            {!props.isNew && <EditButtons onSave={onSave} onDelete={onDelete} />}
            {props.isNew && <NewButton onAdd={onAdd}/>}


        </Modal>, document.getElementById("backdrop-root"));
}

export default NewItem;

const EditButtons = (props) => {
    return (
        <div className="d-flex justify-content-end mt-5">
            <button className="formButtons formDeleteButton" onClick={props.onDelete}>Delete</button>
            <button className="formButtons" onClick={props.onSave}>Save</button>
        </div>
    );
};

const NewButton = (props) => {
    return (
        <div className="d-flex justify-content-end mt-5">
            <button className="formButtons" onClick={props.onAdd}>Add</button>
        </div>
    );
};

const InputField = (props) => {
    return (
        <div className="d-flex align-items-center justify-content-between mx-5 my-3">
            <label className="inputLabel">{props.label}</label>
            <div class="input-field">
                <input type="text" id="search-term" onChange={props.onChange} defaultValue={props.value} />
            </div>
        </div>
    );
}