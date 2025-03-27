import React, { Component }  from 'react';

class ShoppingCart extends Component {
    state = {
       items : [{ 
        amount: 2,
        name: 'Bello',
        price: 42.23
       }]
    }
    render() {
        return <div className='shopping-card'>
            <h2>Warenkorb</h2>
            { this.props.items.map(item => <div key="{item.name}">{item.amount}x {item.name} {item.price}€</div> )}
        </div>;
    }
}

export default ShoppingCart;