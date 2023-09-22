import React, { Component } from "react";
import JournalPrompt from "./JournalPrompt";
import MoodTracker from "../MoodTracker/MoodTracker";

class JournalEntry extends Component{

        constructor(){
            super()
            this.state = {
                entry: "",
                emotion: ""
            }
        }


        onChangeEmotion = (emotion) => {
            this.setState({entry: emotion});
            console.log(this.state.emotion);
        }

        onChageEntry = (e) => {
            this.setState({entry: e.target.value});
        }


        onSubmitEntry = () =>{
            fetch('http://localhost:3000/entry', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: this.props.id,
                    entry: this.state.entry,
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }


    render(){

        return(
            <div>
                <JournalPrompt />
                <MoodTracker onChageEmotion={this.onChangeEmotion}/>
                <div className="form-outline ba">
                <textarea
                onChange={this.onChageEntry}
                className="form-control ba"
                id="textAreaExample2"
                rows="8">
                </textarea>
                <label className="form-label" htmlFor="textAreaExample2"></label>
                </div>
                <a className="f6 link dim br1 ph3 pv2 mb2 dib white bg-purple mt-3 grow" href="#0">Log Entry</a>
            </div>
        )
    }
}

export default JournalEntry;
