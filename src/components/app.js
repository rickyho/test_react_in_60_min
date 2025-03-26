import React, {Component} from 'react';
import Product from './product';
import Navbar from './navbar';
import ShoppingCart from './shopping-cart';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push({
            amount, name, price
        });
        this.setState({items: currentItems});
    }

    render() {
        return  <React.Fragment>
                    <Navbar/>
                    <div className='main-container'>
                        <div className='product-container'>
                            <Product onAdd={() => this.addItem(1, "Bello", 2.3)} title="Bello" img="dog.jpg" desc="Süsser Hund"/>
                            <Product onAdd={() => this.addItem(1, "Lassie", 5.3)} title="Carlo" img="chihuahua.jpg" desc="Kleiner frecher Scheisshaufen"/>
                            <Product onAdd={() => this.addItem(1, "Homo", 2.2)} title="Lucky" img="puppy.jpg" desc="Guckt dumm und stinkt"/>
                            <Product onAdd={() => this.addItem(1, "Luxi", 3.3)} title="Greg" img="border-collie.jpg" desc="Lassie seine Schwester"/>
                        </div>
                        <ShoppingCart items = {this.state.items}/>
                    </div>
                </React.Fragment>
    }
}

export default App;