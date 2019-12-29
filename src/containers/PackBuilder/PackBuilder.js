import React, {Component} from "react";
import ItemForm from "../../components/Pack/ItemForm/ItemForm";
import Pack from "../../components/Pack/Pack";
import uuid from 'react-uuid';
import classes from './PackBuilder.module.css'
import Demo from "./Demo";

class PackBuilder extends Component {
    state = {
        packItems: []
    };

    packItemAddedHandler = (item) => {
        let newItem = {
            ...item,
            id: uuid(),
            totalCalories: item.caloriesPerServing * item.quantity
        };
        this.setState({
            packItems: this.state.packItems.concat(newItem)
        });
    };

    itemClickedHandler = (id) => {
        this.setState({
            packItems: this.state.packItems.filter(packItem => packItem.id !== id)
        })
    };

    render() {
        return (
            <div>
                <div className={classes.PackBuilder}>
                    <Pack
                        packItems={this.state.packItems}
                        itemClicked={(id) => this.itemClickedHandler(id)}>
                        <ItemForm
                            packItemAdded={(item) => this.packItemAddedHandler(item)}/>
                    </Pack>
                </div>
                <Demo/>
            </div>
        )
    }
}

export default PackBuilder
