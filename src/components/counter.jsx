import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        //rather than polluting the render method with below.  turn it into a method.  right click, refactor, extract method, choose location and rename:
        // let classes = "badge m-2";
        // //if count = 0, use the yellow badge.  else the blue:
        // classes += (this.state.count === 0) ? "badge-warning" : "badge-primary"
        return (
            <React.Fragment>
                {/*replace the hard coded classname with classes: */}
                {/*<span className=" badge badge-primary m-2 ">{this.formatCount()}</span>*/}
                {/*<span className=" classes ">{this.formatCount()}</span>*/}
                {/*--after extraction of the method, we can now call the method :*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }
    //the extracted method below:
    getBadgeClasses() {
        let classes = "badge m-2";
        //if count = 0, use the yellow badge.  else the blue:
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary"
        //needed to add a return here, unsure why it didn't do it automatically.
        return classes;
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;