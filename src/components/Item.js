import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject("market")
@observer
class Item extends Component {

    changePrice = () => {
        let price = prompt("Set a price", this.props.item.price)
        this.props.market.changePrice(this.props.item.name, price)
    }

    buyItem = () => {
        this.props.market.buyItem(this.props.item.name)
    }

    render() {
        let item = this.props.item
        return (
            <li>
                <span onDoubleClick={this.changePrice}>
                    {item.quantity} {item.name} available at ${item.price} per one
                </span>
                <button onClick={this.buyItem}>Buy</button>
            </li>
        )
    }
}


export default Item