import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handler = this.handler.bind(this);
  }

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateDescription(event) {
    this.setState({ description: event.target.value });
  }

  handler(event) {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    if (!title || !description) return false;
    this.props.callback({
      title: title,
      description: description
    });
    this.setState({
      description: "",
      title: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handler}>
        <h3 className="tituloArea">Adicionar nova atividade</h3>
        <div style={{ display: "flex" }}>
          <div>
            <div className="titulo">
              <label> Titulo: </label>
              <br />
              <input
                placeholder="Titulo"
                value={this.state.title}
                onChange={this.updateTitle}
                required
              />
            </div>
            <div className="descricao">
              <label>Descrição: </label>
              <br />
              <textarea
                rows="4"
                cols="50"
                required
                placeholder="Descrição"
                value={this.state.description}
                onChange={this.updateDescription}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <button type="submit" className="button buttonAdicionar" />
            <button
              type="reset"
              onClick={this.clearForm}
              className="button buttonRemover"
            />
          </div>
        </div>
      </form>
    );
  }
}
