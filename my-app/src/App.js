import React from "react";
import "./App.css";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItems from "./components/AddItems/AddItems";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Fayad", age: 31 },
      { id: 2, name: "Rabee", age: 32 },
      { id: 3, name: "Majed", age: 28 },
    ],
  };

  deletItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <p className="text-center">Todo List</p>

          <TodoItems items={this.state.items} deletItem={this.deletItem} />
          <AddItems addItem={this.addItem} />
        </header>
      </div>
    );
  }
}

export default App;
