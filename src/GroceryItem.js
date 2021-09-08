import React, { Component } from 'react'
import './GroceryItem.css'

class GroceryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {item: this.props.name, qty: this.props.qty, id: this.props.id, editEnabled: false, deleteEnabled: false, changeItem: false, changeQty: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleItemEdit = this.handleItemEdit.bind(this);
        this.handleQuantityEdit = this.handleQuantityEdit.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }
    handleDeleteClick() {
        this.setState({
            deleteEnabled: true
        })
        this.props.removeGrocery(this.props.id);
    }
    handleEditClick() {
        this.setState({
            editEnabled: true,
            changeItem: true
        })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleItemEdit() {
        this.setState({
            changeItem: false,
            changeQty: true
        })
    }
    handleQuantityEdit() {
        this.setState({
            changeQty: false,
            editEnabled: false
        })
        this.props.editGrocery({item: this.state.item, qty: this.state.qty, id: this.state.id})
    }
    render() {
        let editItem = <form onSubmit={this.handleItemEdit} className="NewGroceryItem">
            <input 
                type="text" 
                name="item" 
                value={this.state.item} 
                onChange={this.handleChange} 
            />
            <button>Change Item</button>
        </form>;
        let editQuantity = <form onSubmit={this.handleQuantityEdit} className="NewGroceryItem">
            <input 
                type="text" 
                name="qty" 
                value={this.state.qty} 
                onChange={this.handleChange} 
                
            />
            <button>Change Quantity</button>
        </form>;
        return (
            <li id={this.props.id} className={`GroceryItem ${this.state.deleteEnabled && 'delete-grocery'}`}>
                {this.state.editEnabled ?
                    <div className="GroceryItem-output">
                        {this.state.changeItem && editItem}
                        {this.state.changeQty && editQuantity}
                    </div>
                :
                    <div className="GroceryItem-output">
                        <p className="GroceryItem-item">{this.props.name}</p>
                        <p className="GroceryItem-qty">{this.props.qty}</p>
                        <div>
                            <button className="GroceryItem-btn" onClick={this.handleEditClick}><i class="fas fa-pencil-alt"></i></button>
                            <button className="GroceryItem-btn" onClick={this.handleDeleteClick}><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                }
            </li>
        )
    }
}

export default GroceryItem;