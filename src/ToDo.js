import React from "react";

function ToDo(props) {
  return (
    <div>
      <p>Titulo: {props.title}</p>
      <p>Descrição: {props.description}</p>
    </div>
  );
}

export default ToDo;
