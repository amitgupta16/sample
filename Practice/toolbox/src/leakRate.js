import React from "react";

class LeakRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      heLam: "",
      dia: "",
      heMol: "",
    };
  }

  calculateLeak = (e) => {
    // console.log("button clicked");
    let refPress = document.getElementById("refPress").value;
    let testPress = document.getElementById("testPress").value;
    let temp = document.getElementById("temp").value;
    let hePurity = document.getElementById("hePurity").value/100;
    let leakRateMass = document.getElementById("leakRate").value;
    // console.log(hePurity);
    // console.log(parseInt(testPress)+1);
    // console.log(refPress+"-"+testPress+"-"+temp+"-"+hePurity+"-"+leakRateMass);

    //check if any field is blank
    if(refPress===""||testPress===""||temp===""||hePurity===""||leakRateMass===""){
        this.setState({
            err:"    Error: Please fill all data first."
        });
        return;
    }

    //check if hePurity is between 0 and 100
    if(hePurity<0.01 || hePurity>1){
        this.setState({
            err:"    Error: He Purity must be between 1 & 100"
        });
        return;
    }

    let leakRateVol =
      (((parseInt(leakRateMass) / 31500000) * 22400) / 102) *
      (1 + parseInt(temp) / 273);
    let heLam =
      (((leakRateVol * hePurity * 12.1) / 18.76) *
        ((parseInt(testPress) + 1) ** 2 - 1)) /
      ((parseInt(refPress) + 1) ** 2 - 1);
    let dia =
      ((256 * 12.1 * 0.00000000001 * 0.3 * leakRateVol) /
        (3.142 * ((parseInt(refPress) + 1) ** 2 - 1))) **
      0.25;
    let heMol =
      (((2 * 3.142 * (parseInt(temp) + 273) * 83200000) / 4) ** 0.5 *
        (dia ** 3 / 0.3) *
        ((parseInt(testPress) + 1) * hePurity)) /
      6;
    // console.log(leakRateVol + "-" + heLam + "-" + dia + "-" + heMol);

    this.setState({
      err: "",
      heLam: parseFloat(heLam).toExponential(3),
      dia: parseFloat(dia).toExponential(3),
      heMol: parseFloat(heMol).toExponential(3),
    });
  };

  render() {
    let heLam = this.state.heLam;
    let dia = this.state.dia;
    let heMol = this.state.heMol;
    let totalLeak;
    if (heLam!=="" || heMol!==""){
        totalLeak = (parseFloat(heLam)+parseFloat(heMol)).toExponential(3);
    };

    return (
      <div>
        <h3>Leak Rate Conversion</h3>
        <table>
          <tbody>
            <tr>
              <td>Enter Working Pressure (bar)</td>
              <td>
                <input type="number" style={{ width: "50px" }} id="refPress" />
              </td>
            </tr>
            <tr>
              <td>Enter Test Pressure (bar)</td>
              <td>
                <input type="number" style={{ width: "50px" }} id="testPress" />
              </td>
            </tr>
            <tr>
              <td>Enter Test Temperature (℃)</td>
              <td>
                <input type="number" style={{ width: "50px" }} id="temp" />
              </td>
            </tr>
            <tr>
              <td>Enter He Purity (0-100%)</td>
              <td>
                <input type="number" style={{ width: "50px" }} id="hePurity" />
              </td>
            </tr>
            <tr>
              <td>Allowed R134a Leak (gm/yr)</td>
              <td>
                <input type="number" style={{ width: "50px" }} id="leakRate" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={this.calculateLeak}>
          Calculate
        </button>
        <label style={{color:"red"}}>{this.state.err}</label>
        <br/><br/>
        <label>He Laminar Flow (mbar l/s):</label>
        <label>{heLam}</label>
        <br></br>
        <label>Diameter of Leak (cm):</label>
        <label>{dia}</label>
        <br></br>
        <label>He Molecular Flow (mbar l/s):</label>
        <label>{heMol}</label>
        <br></br>
        <label>
          <strong>Total He Leak Rate</strong> (mbar l/s):
        </label>
        <label>{totalLeak}</label>
      </div>
    );
  }
}

export default LeakRate;