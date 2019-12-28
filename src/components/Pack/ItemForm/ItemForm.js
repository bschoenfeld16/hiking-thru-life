import React, {Component} from 'react'
import classes from './ItemForm.module.css'

class ItemForm extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }

    state = {
        item: {
            name: '',
            quantity: '',
            caloriesPerServing: ''
        }
    };

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.nameInput.current.focus();
        this.setState({
            item: {
                name: '',
                quantity: '',
                caloriesPerServing: ''
            }
        })
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
            <form onSubmit={this.formSubmitHandler}>
                <div className={classes.ItemForm}>
                    <input type="text" placeholder="item name"
                           ref={this.nameInput}
                           value={name}
                           onChange={(event) => this.inputChangedHandler(event, "name")}/>
                    <input type="number" placeholder="quantity"
                           value={quantity}
                           onChange={(event) => this.inputChangedHandler(event, "quantity")}/>
                    <input type="number" placeholder="calories per serving"
                           value={caloriesPerServing}
                           onChange={(event) => this.inputChangedHandler(event, "caloriesPerServing")}/>
                    <button onClick={() => this.props.packItemAdded(this.state.item)}>Add Item</button>
                </div>
            </form>
        )
    }
}

export default ItemForm
