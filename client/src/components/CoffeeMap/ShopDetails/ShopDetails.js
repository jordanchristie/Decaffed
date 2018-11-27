import React, { Component } from 'react';

// import Note from '../../Note/Note';
import './ShopDetails.css'

class ShopDetails extends Component {
    constructor() {
        super();
        this.state = { favorited: false }
    }

    toggleFavorite = (e) => {
        e.preventDefault();
        this.setState({favorited: !this.state.favorited})
    }

    render() {
        const { shop } = this.props;
        const backgroundStyle = {
            background: `url(${shop.image_url}) no-repeat center`,
            backgroundSize: 'cover'
        }
        return (
            <section className="shop-details" style={backgroundStyle}>
                <article className="overlay">
                    <h2>{shop.name}</h2>
                    <i className="fa fa-envelope"></i>{shop.location.address1} <br/>
                    {shop.location.city}, {shop.location.state} 
                    {shop.location.zip_code}<br />
                    <i className="fa fa-phone"></i>{shop.phone} <br/>
                    <i className="fa fa-star"></i>{shop.rating}/5 <br/>
                    <button onClick={this.props.addNote}>Add Note</button>
                    <i 
                        className={"fa fa-heart " + this.state.favorited ? "favorited" : "" }  
                        onClick={this.toggleFavorite}>
                    </i>
                </article>
            </section>
        )
    }
    
}

export default ShopDetails;