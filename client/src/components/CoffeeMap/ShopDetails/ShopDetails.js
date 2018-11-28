import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from '../../Note/Note';
import { addFavorite, removeFavorite} from '../../../actions';
import './ShopDetails.css'

class ShopDetails extends Component {
    constructor() {
        super();
        this.state = { 
            favorited: false,
            noteOpen: false
         }
    }

    toggleFavorite = (e) => {
        e.preventDefault();

        this.setState({favorited: !this.state.favorited})

        if (this.state.favorited === false) {
            this.props.addFavorite(this.props.shop);
        } else {
            this.props.removeFavorite(this.props.shop);
        }
    }

    openNote = () => {
        this.setState({noteOpen: true})
    }

    closeNote = () => {
        this.setState({noteOpen: false})
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
                    {shop.location.zip_code}
                    <i className="fa fa-phone"></i>{shop.phone}
                    <i className="fa fa-star"></i>{shop.rating}/5
                    <button onClick={this.openNote}>Add Note</button>
                    <i 
                        className={"fa fa-heart"}  
                        onClick={this.toggleFavorite}>
                    </i>
                </article>
                { this.state.noteOpen ?
                    <Note shop={shop} closeNote={this.closeNote}/>
                  :
                  null  
                }
            </section>
        )
    }
    
}



export default connect(null, {addFavorite, removeFavorite})(ShopDetails);