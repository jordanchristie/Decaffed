import React from 'react';

const CoffeeShopModal = ({selectedPlace}) => {
    return (
        <article>
            <img src={selectedPlace.image_url} alt="place" class="shop-img"/>
            <h4>{selectedPlace.name}</h4>
            {selectedPlace.location.address1} <br/>
            {selectedPlace.location.city}, {selectedPlace.location.state}
            {selectedPlace.location.zip_code}<br />
            {selectedPlace.phone} &#9733;{selectedPlace.rating}/5
        </article>
    )
}

export default CoffeeShopModal;