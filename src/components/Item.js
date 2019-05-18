import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    
    changePrice = () => {
        let price = prompt("Set a price", this.props.item.price)
        this.props.store.changePrice(this.props.item.name, price)
    }

    buyItem = () => {
        this.props.store.buyItem(this.props.item.name)
    }

    render() {
        let item = this.props.item
        return (
            <li onDoubleClick={this.changePrice}>
            {item.quantity} {item.name} available at ${item.price} per one 
            <button onClick={this.buyItem}>Buy</button>
            </li>
        )
    }
}


export default Item