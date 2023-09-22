import React, { Component } from "react";

class Greeting extends Component{


    render(){

        const { userName } = this.props;

        return(
            <div>
                <h1>Good Morning, {userName}!</h1>
            </div>
        )
    }
}

export default Greeting;
