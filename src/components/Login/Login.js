import React, { Component } from "react";
import deskGirl from '../../writer.png'

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onPasswordChage = (e) => {
        this.setState({password: e.target.value});
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onSubmitLogin = () => {
        console.log(this.state.email);
        console.log(this.state.password);
        this.props.onChangeRoute('home');
    }


    render(){

        const { onChangeRoute } = this.props;
        return(
            <div className="pa6 flex justify-center items-center">
                <div className="w-50 h-100 bg-light-purple">
                <img className="h-100" src={deskGirl} alt="Girl writing at desk"/>
                </div>
                <div className="w-50 bg-purple h-100">
                <main className="pa4 black-80 ">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 white">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                        <input
                        onChange={this.onEmailChange}
                        className="br5 pa3 input-reset ba bg-white hover-bg-black w-100 mt2"
                        type="email"
                        name="email-address"
                        id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                        <input
                        onChange={this.onPasswordChage}
                        className="b pa3 input-reset ba bg-white hover-bg-black w-100 mt2"
                        type="password"
                        name="password"
                        id="password"
                        />
                    </div>
                    </fieldset>
                    <div className="">
                    <input
                    onClick={this.onSubmitLogin}
                    className="b ph4 pv2 input-reset ba white b--white bg-light-purple grow pointer f6 dib"
                    type="submit"
                    value="Login"
                    />
                    </div>
                    <div className="lh-copy mt3">
                    <p
                    onClick={() => onChangeRoute('register')}
                    className="f6 link dim black db grow white">New Here? Register for free!
                    </p>
                    </div>
                </form>
                </main>
                </div>
            </div>
        )
    }
}

export default Login;
