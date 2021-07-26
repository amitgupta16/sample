import React from 'react';
import './App.css';
import GetData from './getData';
import SaveData from './saveData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dob: "",
      isPostingData: true
    }
  }

  loadUser= (user)=>{
    this.setState({
      name: user.name,
      email: user.email,
      dob: user.dob
    })
  }

  formatDate = (string) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

  //Form
  render() {
  let dob;
    if (this.state.dob !==""){
     dob = this.formatDate(this.state.dob); 
    }

    return (
      <div className="App">
        <h2>Sample Form</h2>
        <div>
          <SaveData loadUser={this.loadUser}/>
        </div> <br/>
        <div>
          <GetData loadUser= {this.loadUser} />
        </div> <br/>
        <div>
          <p>Data Submitted or Retrieved Value</p>
          <label>name:  {this.state.name}</label><br />
          <label>email:  {this.state.email}</label><br />
          <label>dob:  {dob}</label>
        </div>
      </div>
    );
  } // render ends here (Form)
}

export default App;