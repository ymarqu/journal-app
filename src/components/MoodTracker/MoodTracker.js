import React, { Component } from "react";


class MoodTracker extends Component{


    render(){
        return(
            <div className="Mood-Container">
                <p className="">How are you feeling today?</p>
                <div className="">
                    <form >
                        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none"><i class="fa-solid fa-face-smile-beam"></i></button>
                        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none"><i class="fa-solid fa-face-smile"></i></button>
                        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none"><i class="fa-solid fa-face-meh"></i></button>
                        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none"><i class="fa-solid fa-face-frown"></i></button>
                        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none"><i class="fa-solid fa-face-sad-tear"></i></button>
                        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none"><i class="fa-solid fa-face-angry"></i></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MoodTracker
