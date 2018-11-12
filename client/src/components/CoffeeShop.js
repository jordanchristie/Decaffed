import React, { Component } from 'react';
import { Marker } from 'google-maps-react';

class CoffeeShop extends Component {
   
    render() {
        const { coffeeShop } = this.props
        console.log('hello')
        return <Marker title={coffeeShop.name}
                       name={coffeeShop.name}
                       position={coffeeShop.coordinates} />
    }
}

export default CoffeeShop;