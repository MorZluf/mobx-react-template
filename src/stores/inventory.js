import { observable, computed, action } from 'mobx'
import { Item }  from './Item'


export class Inventory {
    @observable items = []

    @action addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find(i => i.name === name)
        item ? item.quantity ++ : this.items.push(new Item (name, price = 0, quantity = 1))
    }

    @action buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        item.quantity --
        if ( item.quantity === 0 )
        {
            this.items.splice(this.items.findIndex(i => i.name === name), 1)
        } 
    }

    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }

    @computed get numItems() {
        let itemsCount = 0
        this.items.forEach(i => itemsCount += i.quantity)
        return itemsCount
    }

    

}

