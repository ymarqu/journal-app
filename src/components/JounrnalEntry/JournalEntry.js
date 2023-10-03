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
            this.setState({emotion: emotion}, () => {
                console.log(this.state.emotion);
            });

        }

        onChangeEntry = (e) => {
            this.setState({entry: e.target.value});
            console.log(this.state.entry)
        }


        onSubmitEntry = () =>{
            console.log(this.props.user.id)
            console.log(this.state.entry)
            console.log(this.state.emotion)
            fetch('http://localhost:3000/entry', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id,
                    entry: this.state.entry,
                    emotion: this.state.emotion
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }


    render(){

        return(
            <div>
                <JournalPrompt />
                <MoodTracker onChangeEmotion={this.onChangeEmotion}/>
                <div className="form-outline ba">
                <textarea
                onChange={this.onChangeEntry}
                className="form-control ba"
                id="textAreaExample2"
                rows="8">
                </textarea>
                <label className="form-label" htmlFor="textAreaExample2"></label>
                </div>
                <p
                onClick = {this.onSubmitEntry}
                className="f6 link dim br1 ph3 pv2 mb2 dib white bg-purple mt-3 grow">
                Log Entry
                </p>
            </div>
        )
    }
}

export default JournalEntry;
