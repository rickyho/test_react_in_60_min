import React, { Component }  from 'react';

class Product extends Component {
    state = {}
    render() {
        return <div className="card" styles={{width: '18rem'}}>
        <img src={"/assets/images/" + this.props.img} className="card-img-top" alt="Hund"/> 
        <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.desc}</p>
            <button onClick={this.props.onAdd} className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    }
}

export default Product;