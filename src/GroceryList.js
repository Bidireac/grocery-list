import React, { Component } from 'react';
import NewGroceryItem from './NewGroceryItem';
import GroceryItem from './GroceryItem';
import './GroceryList.css';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = { groceries: [] };
    this.addGrocery = this.addGrocery.bind(this);
    this.editGrocery = this.editGrocery.bind(this);
    this.removeGrocery = this.removeGrocery.bind(this);
  }
  removeGrocery(id) {
    setTimeout(() => {
      let newState = this.state.groceries.filter(
        (grocery) => grocery.id !== id
      );
      this.setState({
        groceries: newState,
      });
    }, 1500);
  }
  addGrocery(item, qty, id) {
    this.setState((prevState) => ({
      groceries: [...prevState.groceries, { item, qty, id }],
    }));
  }
  editGrocery(item) {
    console.log(item);
    let newState = this.state.groceries.map((grocery) => {
      if (grocery.id === item.id) {
        return item;
      }
      return grocery;
    });
    console.log(newState);
    this.setState({
      groceries: newState,
    });
  }
  render() {
    return (
      <div className="GroceryList">
        <h1 className="GroceryList-heading">My Grocery List</h1>
        <NewGroceryItem addGrocery={this.addGrocery} />
        <ul className="GroceryList-ul">
          {this.state.groceries.map((item) => (
            <GroceryItem
              key={item.id}
              id={item.id}
              name={item.item}
              qty={item.qty}
              editGrocery={this.editGrocery}
              removeGrocery={this.removeGrocery}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default GroceryList;
