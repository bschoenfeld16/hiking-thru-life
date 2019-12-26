import React, {Component} from 'react'
import classes from './ItemForm.module.css'

class ItemForm extends Component {
    state = {
        item: {
            name: '',
            quantity: '',
            caloriesPerServing: ''
        }
    };

    inputChangedHandler = (event, itemProperty) => {
        const updatedItem = {...this.state.item};
        updatedItem[itemProperty] = event.target.value;
        this.setState({
            item: updatedItem
        })
    };


    render() {
        const {name, quantity, caloriesPerServing} = this.state.item;
        return (
            <form onSubmit={(event) => this.props.packItemAdded(event, this.state.item)}>
                <div className={classes.ItemForm}>
                    <input type="text" placeholder="item name"
                           value={name}
                           onChange={(event) => this.inputChangedHandler(event, "name")}/>
                    <input type="number" placeholder="quantity"
                           value={quantity}
                           onChange={(event) => this.inputChangedHandler(event, "quantity")}/>

                    <input type="number" placeholder="calories per serving"
                           value={caloriesPerServing}
                           onChange={(event) => this.inputChangedHandler(event, "caloriesPerServing")}/>
                    <button onClick={(event) => this.props.packItemAdded(event, this.state.item)}>Add Item</button>
                </div>
            </form>
        )
    }
}

export default ItemForm
