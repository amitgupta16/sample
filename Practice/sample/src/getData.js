import React from 'react';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            findName: ""
        }
    }

    onHandleChange = (e) => {
        this.setState({
            findName: e.target.value
        })
        console.log(this.state.findName);
    }

    //Get data from Server
    onSubmitFindName = () => {
        fetch('http://localhost:3000/getData', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.findName
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.loadUser(user);
                console.log(user)                
            })
    }

    render() {
        return (
            <fieldset>
                <legend><strong>Data Retrieval Form</strong></legend>
                     <label>Name:  </label>
                    <input
                        type='text'
                        name='findName'
                        placeholder='Enter name to get data'
                        onChange={this.onHandleChange}
                        required>
                    </input>
                    <br /><br />
                    <button onClick={this.onSubmitFindName}>Get Data !</button>
            </fieldset>
        )
    }
}

export default GetData;