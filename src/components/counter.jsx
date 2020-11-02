import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };


    //sometimes we have to pass arguments with our event.  like dealing with a list of items in a shopping cart.  to do this, we pass a function reference.

    handleIncrement = (product) => { //(can't pass an argument until doHandleIncrement has been defined)


        this.setState({count: this.state.count + 1})
    };
    //----------first option to pass a function reference. ------------
//--temp define another method - messy and redundant.:
    doHandleIncrement = () => {
        this.handleIncrement({ id: 1})
    }
// once this method is defined, you can pass an argument in the preview method above.
// after you pass the argument, you can now change the onClick below.

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ this.doHandleIncrement}
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