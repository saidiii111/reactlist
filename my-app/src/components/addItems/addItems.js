import React from "react";
import "./AddItems.css";

class AddItems extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      age: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.neme}
          />
          <input
            type="number"
            placeholder="Enter age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Adding" />
        </form>
      </div>
    );
  }
}

export default AddItems;
