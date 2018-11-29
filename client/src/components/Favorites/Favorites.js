import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFavorites } from '../../actions';

class Favorites extends Component {
    componentDidMount() {
        this.props.fetchFavorites()
    }

    renderFavorites = () => {
        const { favoritedShops } = this.props;

    favoritedShops.map(shop => {
        return <article key={shop.id}> 
                    <img src={shop.url} alt="shop"/>
               </article>
    })
    }
    render() {
        return (
            <section className="favorites-list">
                { this.props.favoritedShops ?
                    renderFavorites
                    : null
                }
            </section>
        )
    }
    

    
}

const mapStateToProps = ({favoritedShops}) => {
    return {favoritedShops}
}

export default connect(mapStateToProps, { fetchFavorites })(Favorites);