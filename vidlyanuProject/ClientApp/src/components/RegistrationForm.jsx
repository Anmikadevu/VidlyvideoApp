import React, { Component } from 'react';
import validate from 'react-joi-validation';




 export default class RegistrationForm extends Component {
    state = {

        accounts: { userName: '', password: '',name:"" },
        error: {}

    }
    handleInputChange = (e) => {
        const account = { ...this.state.accounts }
        account[e.target.name] = e.target.value
        this.setState({

            account

        })


    }



    render() {

        return (<div>
            <h1>Register Here</h1>
            <form action="/action_page.php">
                <div className="form-group">
                    <label htmlFor="pwd">UserName</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        name="userName"
                        onChange={this.handleInputChange}
                        value={this.state.accounts.userName}
                       
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password"
                        className="form-control"
                        id="pwd" name="password"
                        onChange={this.handleInputChange}
                        value={this.state.accounts.password}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="password"
                        className="form-control"
                        id="pwd" name="name"
                        onChange={this.handleInputChange}
                        value={this.state.accounts.name} />
                </div>
                <button type="btn btn-success" className="btn btn-default" >Register</button>
            </form>
        </div>
        );
    }
}

