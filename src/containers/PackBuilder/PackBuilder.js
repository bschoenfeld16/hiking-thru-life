import React, {Component} from "react";
import ItemForm from "../../components/Pack/ItemForm/ItemForm";
import Pack from "../../components/Pack/Pack";
import uuid from 'react-uuid';

class PackBuilder extends Component {
    state = {
        packItems: []
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(this.state.packItems)
    }

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
            <div>
                <ItemForm
                    packItemAdded={(item) => this.packItemAddedHandler(item)}/>
                <Pack
                    packItems={this.state.packItems}
                    itemClicked={(id) => this.itemClickedHandler(id)}
                />
            </div>
        )
    }
}

export default PackBuilder
