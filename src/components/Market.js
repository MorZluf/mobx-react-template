import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Item from './Item';


@inject("market")
@observer
class Market extends Component {
    constructor(){
        super()
        this.state ={
            newItem : ""
        }
    }

    handleInput = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }

    addItem = () => {
        this.props.market.addItem(this.state.newItem)
        this.cleanInput()
    }

    cleanInput = () => {
        this.setState({
            newItem: ""
        })
    }

    render() {


        return (
            <div>
                <input id="item-input" onChange={this.handleInput} value={this.state.newItem} />
                <button onClick={this.addItem}>Add</button>
                <ul id="market-list">
                    {this.props.market.items.map((i, j) => <Item item={i} key={j} />)}
                </ul>
                <p>You have a total of {this.props.market.numItems} items in the store</p>
            </div>
        )
    }
}


export default Market