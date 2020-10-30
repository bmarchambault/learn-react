import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

//SEE NOTE BELOW:

//create a constructor for binding the this keyword
    constructor(){
        super();  //this gives us access to the Counter object.
       this.handleIncrement =  this.handleIncrement.bind(this);
    }



    handleIncrement(){
        //this method needs to increment the value of the count property
        // if a function is called as part of an object (obj.method) this will always return a reference to that objet.
        // if a function is called as a stand-alone function (function () ), without an object reference, this by default will return a reference to the window object. However, if strict mode is enabled, it will be undefined.  so we need to bind this.
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