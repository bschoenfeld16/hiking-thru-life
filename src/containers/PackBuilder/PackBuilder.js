import React, {Component} from "react";
import ItemForm from "../../components/Pack/ItemForm/ItemForm";
import Pack from "../../components/Pack/Pack";
import uuid from 'react-uuid';
import classes from './PackBuilder.module.css'

class PackBuilder extends Component {
    state = {
        packItems: []
    };

    packItemAddedHandler = (item) => {
        let newItem = {
            ...item,
            id: uuid()
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
            <div className={classes.PackBuilder}>
                <Pack
                    packItems={this.state.packItems}
                    itemClicked={(id) => this.itemClickedHandler(id)}>
                    <ItemForm
                        packItemAdded={(item) => this.packItemAddedHandler(item)}/>
                </Pack>
            </div>
        )
    }
}

export default PackBuilder
