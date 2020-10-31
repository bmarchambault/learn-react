import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        //in react we cannot modify the state directly (this.state.count++).  instead use a react setter:
        //pass an object to the setter using curly braces. the properties of the object will be merged or overridden if any exits.
        this.setState({count: this.state.count + 1})
        console.log('increment clicked', this)
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ this.handleIncrement}
                    className="btn btn-secondary btn-sm">Increment</button>

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
//this is a bit noisy.  in every component that has an event handler, we have to make a constructor, call the super and then reset the function the the bind method:
//this.function = this.function.bind(this)