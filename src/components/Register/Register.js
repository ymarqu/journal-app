import React, { Component } from 'react';

class Register extends Component{


    render(){

        return(
            <div>
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 mw10 center">
                <main className="pa4 black-80 ">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 purple">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2" type="text" name="name"  id="name" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100 mt2" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="mv3">
                    <input className="b ph4 pv2 input-reset ba white b--white bg-light-purple grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                </form>
                </main>
            </article>
            </div>
        )
    }
}

export default Register;
