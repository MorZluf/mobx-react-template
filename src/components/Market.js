import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Item from './Item';


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
        this.props.store.addItem(this.state.newItem)
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
                    {this.props.store.items.map((i, j) => <Item item={i}
                        key={j} store={this.props.store} />
                    )}
                </ul>
            </div>
        )
    }
}


export default Market