import React from 'react';
import { connect } from 'react-redux';

const Favorites = () => {
    const { favoritedShops } = props;

    favoritedShops.map(shop => {
        return <article key={shop.id}> 
                    <img src={shop.url} alt="shop"/>
               </article>
    })

    return (
        <section className="favorites-list">
            <h1>I am the Favorites!</h1>
        </section>
    )
}

const mapStateToProps = ({favoritedShops}) => {
    return {favoritedShops}
}

export default connect(mapStateToProps)(Favorites);