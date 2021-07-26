import React from "react";

class cylForce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dia: null,
      pr: null,
      inDia: null,
    };
  }

  // To commonize all event handling, we're getting e.target's attribute i.e. name & value
  // where event.target's name has to be same as state's key.
  onHandleClick = (e) => {
    let nm = e.target.name;
    let vl = e.target.value;
    this.setState({ [nm]: vl });
  };

  render() {
    let dia = this.state.dia;
    let pr = this.state.pr;
    let inDia = this.state.inDia;
    let push;
    let pull;
    if (dia != null && (pr != null) & (inDia != null)) {
      push = (pr * Math.PI * (dia / 20) ** 2).toFixed(2);
      pull = (pr * Math.PI * ((dia / 20) ** 2 - (inDia / 20) ** 2)).toFixed(2);
    } else {
      push = "";
      pull = "";
    }

    return (
      <div>
        <h3>Cylinder Force Calculation.</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Enter Cylinder Dia (mm): </label>
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="dia"
                  style={{ width: "50px" }}
                  onChange={this.onHandleClick}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Enter Shaft Dia (mm): </label>{" "}
              </td>
              <td>
                <input
                  type="number"
                  name="inDia"
                  style={{ width: "50px" }}
                  onChange={this.onHandleClick}
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <label>Enter Pressure (bar): </label>{" "}
              </td>
              <td>
                <input
                  type="number"
                  name="pr"
                  style={{ width: "50px" }}
                  onChange={this.onHandleClick}
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <label>Cylinder Push (kgf): </label>
        <label>{push}</label>
        <br />
        <label>Cylinder Pull (kgf): </label>
        <label>{pull}</label>
      </div>
    );
  }
}

export default cylForce;
