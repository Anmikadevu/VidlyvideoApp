import React, { Component } from 'react';
import validate from 'react-joi-validation';
import './loginForm.css'
class loginForm extends Component {
    state = {

        accounts: { userName: '', password: '' },
        error: {}

    }
    handleInputChange = (e) => {
        const account = { ...this.state.accounts }
        account[e.target.name] = e.target.value
        this.setState({
            
            account

        })


    }
    handleSubmit = (e) => {

        e.preventDefault();
        const error = this.validate();
        this.setState({
            error

        })

    }
    
   
    render() {
        
        return (<div>
            <h1>Login Here</h1>
            <form action="/action_page.php" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="pwd">UserName</label>
                    <input
                        type="text"
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
                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button type="btn btn-success"className="btn btn-default" >Submit</button>
            </form>
            </div>
        );
    }
}

export default loginForm;