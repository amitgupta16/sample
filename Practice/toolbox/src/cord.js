import React from "react";

class Cord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      1: ["", "", ""],
      2: ["", "", ""],
      3: ["", "", ""],
      4: ["", "", ""],
      5: ["", "", ""],
      6: ["", "", ""],
      7: ["", "", ""],
      8: ["", "", ""],
      9: ["", "", ""],
    };
  }

  onHandleClick = (e) => {
    let name = e.target.name;
    // console.log('Name returned by input: '+name);
    let newPos = this.makeArray(name);
    // console.log('Array returned: '+newPos);
    this.setState({ [name]: newPos });
  };

  //used in onHandleClick
  makeArray(name) {
    let array = [];
    let list = document.getElementsByName(name);
    // console.log(list);
    // console.log(Object.keys(list).length);
    // console.log(list[0].valueAsNumber);
    for (let i = 0; i < Object.keys(list).length; i++) {
      let a = list[i].value;
      // console.log(a);
      array.push(a);
    }
    // console.log('Value of changed xyz: '+array);
    return array;
  }

  //Used in render
  calculateStepLength(a, b) {
    if (a.includes("") || b.includes("")) {
      return 0;
    }
    let stplngth =
      ((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2 + (b[2] - a[2]) ** 2) ** 0.5;
    return stplngth;
  }

  render() {
    // console.log(this.state);
    // console.log(Object.keys(this.state).length); //no. of states in this.state
    let totalLength = 0;

    for (let i = 1; i < Object.keys(this.state).length; i++) {
      let a = this.state[i];
      let b = this.state[i + 1];
      // console.log(a);
      // console.log(b);
      let stepLength = this.calculateStepLength(a, b);
      // console.log('Step: '+stepLength);
      totalLength += stepLength;
      // console.log('Total: '+totalLength);
    }

    return (
      <div>
        <h3>Pipe Length Calculation.</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>x</th>
                <th>y</th>
                <th>z</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Position 1</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="1"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="1"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="1"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 2</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="2"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="2"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="2"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 3</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="3"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="3"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="3"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 4</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="4"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="4"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="4"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 5</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="5"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="5"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="5"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 6</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="6"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="6"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="6"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 7</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="7"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="7"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="7"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 8</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="8"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="8"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="8"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
              <tr>
                <td>Position 9</td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="9"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="9"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="data"
                    name="9"
                    style={{ width: "50px" }}
                    onChange={this.onHandleClick}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <label>Total Length: </label>
          <label>{totalLength.toFixed(2)}</label>
        </div>
        <br/>
        <div>
          <button type="button" onClick={this.clearAll}>
            Clear all fields
          </button>
        </div>
      </div>
    );
  } //render ends here.

  clearAll = (e) => {
    console.log("Button Clicked");

    //clear all fields
    var elements = [];
    elements = document.getElementsByClassName("data");
    for (let i = 0; i < elements.length; i++) {
      elements[i].value = "";
    }

    //set state back to original state
    this.setState({
      1: ["", "", ""],
      2: ["", "", ""],
      3: ["", "", ""],
      4: ["", "", ""],
      5: ["", "", ""],
      6: ["", "", ""],
      7: ["", "", ""],
      8: ["", "", ""],
      9: ["", "", ""],
    });
  }; // clearAll ends here.
} //class Cord ends here.

export default Cord;