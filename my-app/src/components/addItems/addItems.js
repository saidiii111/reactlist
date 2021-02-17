import React from "react";
import "./AddItems.css";

class AddItems extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter age..."
            id="age"
            onChange={this.handleChange}
          />
          <input type="submit" value="Adding" />
        </form>
      </div>
    );
  }
}

export default AddItems;
