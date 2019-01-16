import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring';
import styled from 'styled-components';

import Note from './Note';
import { addFavorite, removeFavorite} from '../actions';


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
            this.props.removeFavorite(this.props.shop.id);
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
            <ShopInfo style={backgroundStyle}>
                <Overlay>
                    <h2>{shop.name}</h2>
                    <i className="fa fa-envelope"></i>{shop.location.address1} <br/>
                    {shop.location.city}, {shop.location.state} 
                    {shop.location.zip_code}
                    <i className="fa fa-phone"></i>{shop.phone}
                    <i className="fa fa-star"></i>{shop.rating}/5
                    <button onClick={this.openNote}>Add Note</button>
                    <i 
                        className={"fa fa-heart " + (this.state.favorited ? 'favorited' : '')}  
                        onClick={this.toggleFavorite}>
                        {this.state.favorited ? 'Remove from Favorites' : 'Add to Favorites'}
                    </i>
                </Overlay>
                { this.state.noteOpen ?
                    <Note shop={shop} closeNote={this.closeNote}/>
                  :
                  null  
                }
            </ShopInfo>
        )
    }
    
}



export default connect(null, { addFavorite, removeFavorite })(ShopDetails);

const ShopInfo = styled.section`
    background-size: cover;
`

const Overlay = styled.article`
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.6);
    color: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const ShopImg = styled.img`

`