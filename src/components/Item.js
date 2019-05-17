import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Item extends Component {


    render() {
        let item = this.props.item
        return (
            <div>
            Item : {item.name} Price : ${item.price} Quantity : {item.quantity}
            <button>Buy</button>
            </div>
        )
    }
}


export default Item