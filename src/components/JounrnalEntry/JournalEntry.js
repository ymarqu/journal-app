import React, { Component } from "react";
import JournalPrompt from "./JournalPrompt";

class JournalEntry extends Component{

    render(){

        return(
            <div>
                <JournalPrompt />
                <div className="form-outline ba">
                <textarea className="form-control ba" id="textAreaExample2" rows="8"></textarea>
                <label className="form-label" for="textAreaExample2"></label>
                </div>
                <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-purple mt-3 grow" href="#0">Log Entry</a>
            </div>
        )
    }
}

export default JournalEntry;
