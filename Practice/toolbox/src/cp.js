import React from "react";

class Cp extends React.Component {
  constructor(props){
      super(props);
      this.state=({
          err: "",
          upper: "",
          lower: "",
          data: ["",""],
      })
  }

  onClick = (e) =>{

    let upper = parseFloat(document.getElementById("upper").value);
    let lower = parseFloat(document.getElementById("lower").value);

    let input = document.getElementsByName("data");
    let array = [];
    for( let i=0; i<input.length; i++){
        array[i]=parseFloat(input[i].value);
    }
    //with blank data, array returns NaN
    if(upper==="" || lower==="" || array.includes(NaN)){
      this.setState({
        err: "Error: Please fill all data first."
      });
      return;
    }
    //Check if Upper & Lower Limit are inter-changed.
    if(lower>=upper){
      this.setState({
        err: "Error: Lower Limit should be less than Upper Limit."
      });
      return;
    }

    this.setState({
        err: "",
        upper: upper,
        lower: lower,
        data: array
      })
  } //onClick ends here...

  createDataFields(){
    return <label> add loop here </label>
  }

  render() {
    //getting data from state
    let upper = this.state.upper;
    let lower = this.state.lower;
    let data = this.state.data;
    //perform calculations
    let max = Math.max(...data);
    let min = Math.min(...data);
    let range = max-min;
    let avg = data.reduce((a,b)=>a+b,0)/data.length;
    let stDev = 0;
    let cp = 0;
    let cpk = 0;
    if(!data.includes("")){
       let sumOfSq = 0;
        for (let i=0;i<data.length;i++){
            sumOfSq += (Math.abs(data[i]-avg))**2
        }
        stDev = (sumOfSq/(data.length-1))**0.5;
        cp = (upper-lower)/(6*stDev);
        cpk = Math.min((upper-avg),(avg-lower))/(3*stDev);   
    }
  
    return (
      <div>
        <h3>Process Capability</h3>
        <label>Upper Limit:</label>
        <input type="number" id="upper" style={{width:"80px"}} />
        <br />
        <label>Lower Limit:</label>
        <input type="number" id="lower" style={{width:"80px"}} />
        <br /><br/>
        <label>Enter data for n=30 samples</label>
        <table>
          <tbody>
            <tr>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
              <td>
                <input type="number" name="data" style={{ width: "50px" }} />
              </td>
            </tr>
          </tbody>
        </table>
        <div id="datas">{this.createDataFields()}</div>
        <button type="button" onClick={this.onClick}> Calculate</button>
        <label style={{color:"red"}}>{this.state.err}</label><br/><br/>
        <table>
            <tbody>
                <tr>
                    <td>Max:</td>
                    <td><label>{max}</label></td>
                    <td>  |  </td>
                    <td>Min:</td>
                    <td><label>{min}</label></td>
                </tr>
                <tr>
                    <td>Range:</td>
                    <td><label>{range}</label></td>
                    <td>  |  </td>
                    <td>Std Dev:</td>
                    <td><label>{stDev.toFixed(2)}</label></td>
                </tr>
                <tr>
                    <td>Cp:</td>
                    <td><label>{cp.toFixed(2)}</label></td>
                    <td>  |  </td>
                    <td>Cpk:</td>
                    <td><label>{cpk.toFixed(2)}</label></td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  } //render end here...
}

export default Cp;
