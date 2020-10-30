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
                {/*--paste this in to the method.*/}
                {/*<ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>*/}

            {/* --- now call the helper method: */}
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