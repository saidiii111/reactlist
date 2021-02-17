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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          testing
          <TodoItems items={this.state.items} deletItem={this.deletItem} />
          <AddItems />
        </header>
      </div>
    );
  }
}

export default App;
