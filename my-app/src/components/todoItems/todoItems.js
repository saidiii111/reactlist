import React from "react";
import "./TodoItems.css";

const TodoItems = (props) => {
  const { items, deletItem } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.neme}</span>
          <span>{item.age}</span>
          <span onClick={() => deletItem(item.id)}>&times;</span>
        </div>
      );
    })
  ) : (
    <span>there is no items to show</span>
  );
  return (
    <div className="ListItems">
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      {ListItems}
    </div>
  );
};

export default TodoItems;
