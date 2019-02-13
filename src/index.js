import React from "react";
import ReactDOM from "react-dom";

import ToDoList from "./ToDoList";
import ToDo from "./ToDo";
import Form from "./Form";
import Points from "./Points";

import "./styles.css";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDos: [], last: undefined, points: 0 };

    this.clearForm = this.clearForm.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(toDo) {
    this.setState(function(state) {
      return {
        toDos: state.toDos.concat([toDo]),
        last: toDo
      };
    });
  }

  removeTodo(index) {
    this.setState(function(state) {
      return {
        toDos: state.toDos.filter((t, id) => id !== index)
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      foo: "",
      bar: ""
    });
  }

  render() {
    const toDos = this.state.toDos;
    const last = this.state.last;
    let points = this.state.points;
    return (
      <div>
        <div className="inputMeta">
          <Form callback={this.addTodo} />
        </div>

        <div className="statics">
          <h3 className="tituloStatistics">Estatísticas</h3>
          <div className="staticsData">
            <div>
              {/* AQUI BEM A CHAMADA PARA O CONTADOR DE ATIVIDADES */}
              <span>Atividades inseridas: </span>
              {last ? <Points points={points} /> : parseInt(0)}
            </div>

            <div>
              {/* AQUI BEM A CHAMADA PARA O CONTADOR DE ATIVIDADES */}
              <span>Atividades Concluidas: </span>
              {last ? <Points points={points} /> : parseInt(0)}
            </div>

            <p>Última atividade adicionada:</p>
            {last ? (
              <ToDo title={last.title} description={last.description} />
            ) : (
              "Nenhua atividade adicionada"
            )}
          </div>
        </div>

        <div className="activities">
          <h3 className="tituloActivities">Atividades</h3>
          <div className="activitiesData">
            <ToDoList list={toDos} removeCallback={this.removeTodo} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ToDoApp />, document.getElementById("root"));
