import React, { Component } from 'react'

class Navigation extends Component{

    render(){

        const {onChangeRoute, isSignedIn} = this.props;

        return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand me-2" href="/">
                <p>MindfulScript</p>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">

                    </li>
                </ul>

                <div className="d-flex align-items-center">
                  {isSignedIn === false ?
                  <>
                    <button onClick={() => {onChangeRoute('login')}}type="button" className="btn btn-link px-3 me-2">
                    Login
                    </button>
                    <button onClick={() => {onChangeRoute('register')}}type="button" className="btn btn-primary me-3">
                    Sign up for free
                    </button>
                    </>:
                    <button onClick={() => {onChangeRoute('signout')}} type="button" className="btn btn-link px-3 me-2">
                    Log out
                    </button>
                    }
                </div>
                </div>
            </div>
            </nav>
       </>
        )
    }
}

export default Navigation;
