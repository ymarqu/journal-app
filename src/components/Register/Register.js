import React, { Component } from 'react';

class Register extends Component{

    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }

    onFirstNameChange = (e) => {
        console.log(e.target.value);
        this.setState({firstName: e.target.value})
    }
    onLastNameChange = (e) => {
        console.log(e.target.value)
        this.setState({lastName: e.target.value})
    }
    onPasswordChage = (e) => {
        this.setState({password: e.target.value});
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user){
                this.props.onChangeRoute("home");
                this.props.loadUser(user);
            }
        })
    }


    render(){

        return(
            <div>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 mw10 center">
                <main className="pa4 black-80 ">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 purple">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="FirstName">First Name</label>
                        <input
                        onChange={this.onFirstNameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2"
                        type="text"
                        name="firstName"
                        id="firstName"
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="LastName">Last Name</label>
                        <input
                        onChange={this.onLastNameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2"
                        type="text"
                        name="lastName"
                        id="lastName"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input
                        onChange={this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2"
                        type="email"
                        name="email-address"
                        id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input
                        onChange={this.onPasswordChage}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2"
                        type="password"
                        name="password"
                        id="password"
                        />
                    </div>
                    </fieldset>
                    <div className="mv3">
                    <input
                    onClick={this.onSubmitRegister}
                    className="b ph4 pv2 input-reset ba white b--white bg-light-purple grow pointer f6 dib"
                    type="button"
                    value="Register"
                    />
                    </div>
                </form>
                </main>
            </article>
            </div>
        )
    }
}

export default Register;
