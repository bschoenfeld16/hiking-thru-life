import React, {Component} from "react";
import ItemForm from "../../components/Pack/ItemForm/ItemForm";
import PackItem from "../../components/Pack/PackItem/PackItem";
import uuid from 'react-uuid';

class PackBuilder extends Component {
    state = {
        packItems: []
    };

    packItemAddedHandler = (event, item) => {
        event.preventDefault();
        this.setState({
            packItems: this.state.packItems.concat(item)
        });
    };

    render() {
        return (
            <div>
                <ItemForm
                    packItemAdded={(event, item) => this.packItemAddedHandler(event, item)}/>
                {
                    this.state.packItems.map(packItem => (
                        <PackItem
                            key={uuid()}
                            name={packItem.name}
                            quantity={packItem.quantity}
                            calories={packItem.quantity * packItem.caloriesPerServing}
                        />
                    ))
                }
            </div>
        )
    }
}

export default PackBuilder
