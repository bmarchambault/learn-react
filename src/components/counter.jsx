import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };


    //sometimes we have to pass arguments with our event.  like dealing with a list of items in a shopping cart.  to do this, we pass a function reference.

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1});
    };
    //----------SECOND option to pass a function reference. ------------
//--use an inline method - take the arrow function and pass it into the the onClick inside curly braces:
//     doHandleIncrement = () => {
//         this.handleIncrement({ id: 1})
//     }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // onClick={ this.doHandleIncrement}
                    onClick = { () =>  this.handleIncrement({id: 1}) }
                    //instead of hardcoding the id, you'd use the map method and then pass in the singular version of the array.  ie. products, product.
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
