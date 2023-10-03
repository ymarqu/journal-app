import React, { Component } from "react";


class MoodTracker extends Component{

    render(){

        return(
            <div className="Mood-Container">
                <p className="">How are you feeling today?</p>
                <div className="">
                    <div>
                        <p onClick={() => this.props.onChangeEmotion("Happy")} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none" value="Happy"><i class="fa-solid fa-face-smile-beam"></i></p>
                        <p onClick={() => this.props.onChangeEmotion("Okay")} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none" value="Okay"><i class="fa-solid fa-face-smile"></i></p>
                        <p onClick={() => this.props.onChangeEmotion("Meh.")} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none" value="Meh."><i class="fa-solid fa-face-meh"></i></p>
                        <p onClick={() => this.props.onChangeEmotion("Sad")} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none" value="Sad"><i class="fa-solid fa-face-frown"></i></p>
                        <p onClick={() => this.props.onChangeEmotion("Super Sad")} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none" value="Super Sad"><i class="fa-solid fa-face-sad-tear"></i></p>
                        <p onClick={() => this.props.onChangeEmotion("Angry")} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple ma2 mt0 grow b--none" value="Angry"><i class="fa-solid fa-face-angry"></i></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoodTracker
