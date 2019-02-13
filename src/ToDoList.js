import React from "react";
import ToDo from "./ToDo";

function renderItem(item, index, callback, conclude) {
  function onClickHandler() {
    return callback(index);
  }

  function onClickConclude() {
    return callback(index);
  }

  return (
    <div
      key={index}
      style={{
        display: "flex",
        borderBottom: "2px solid gray",
        marginBottom: "15px"
      }}
    >
      <ToDo title={item.title} description={item.description} />
      <div style={{ width: "80px" }}>
        <button onClick={onClickConclude} className="button buttonConcluida" />
        <button onClick={onClickHandler} className="button buttonRemover" />
      </div>
    </div>
  );
}

function ToDoList(props) {
  return (
    <div>
      {props.list.map(function(t, i) {
        return renderItem(t, i, props.removeCallback);
      })}
    </div>
  );
}

export default ToDoList;
