import React from 'react';

class SaveData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            dob: ""
        }
    }

    onHandleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
        console.log(value);
    }

    onSubmitSaveData = () => {
        let { name, email, dob } = this.state;
        console.log(name, email, dob);
        fetch('http://localhost:3000/saveData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                dob: dob,
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.loadUser(user);
                console.log(user)                
            })
        alert('Data Submitted');
    }

    render() {
        return (
            <fieldset>
                <legend><strong>Data Input Form</strong></legend>
                    <label>Name:  </label>
                    <input type='text' name='name' placeholder='Enter your name' onChange={this.onHandleChange} required></input>
                    <br />
                    <label>e-mail:  </label>
                    <input type='email' name='email' placeholder='Enter your e-mail' onChange={this.onHandleChange} required></input>
                    <br />
                    <label>DoB:  </label>
                    <input type='date' name='dob' onChange={this.onHandleChange}></input>
                    <br />
                    <button onClick={this.onSubmitSaveData}>Submit !</button>
            </fieldset>
        )

    }
}

export default SaveData;