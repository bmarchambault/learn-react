import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3' ]
        // tags: []
    };
    //--Need to use javascript for conditional logic as JSX is not a templating engine.
    //--create a helper method in JS:
    renderTags(){
        if (this.state.tags.length === 0) return <p> There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    // --to test, un comment out the empty tag array.
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
{/*-----------------first option to conditionally rendering: --------------------*/}
                {/*--paste this in to the method.*/}
                {/*<ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>*/}

            {/* --- now call the helper method: */}
            {/*    { this.renderTags() }*/}
{/*-----------------second option to conditionally rendering: --------------------*/}
            {/*--- if we want to send a given message based on a certain condition.  currently theres only a single if statement without an else.  In javascript you can use the conditional AND between non boolean values see note below.  write our condition within the curly braces: */}
                { this.state.tags.length === 0 && 'Please create a new tag'}
                    { this.renderTags() }

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;

//NOTE:
// in the console type: true && false - remember truthy and falsy rules? this will return false.
// in the console type:  true && 'hi' - in truthy falsy rules only an empty string is false, so here are to true values.  it will return hi.  the jS engine looks at the first value and evaluates it to true, so it will move to the second.  the JS engine tries to convert the string to a truthy or falsy, and since its not an empty string it evaluates as true and thus so, will automatically return the second operand..
//in the console type:  true && 'hi' && 1 - the first is true so the truthy falsy evaluation continues, the second is truthy, evaluation continues, the last is also truthy, this will return 1.
