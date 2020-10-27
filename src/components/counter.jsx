import React, { Component } from "react";

class Counter extends Component {
    //add the state property and set it to an object.
    //state is a special property in react components,  its an object that includes data that the component needs.
    state = {
        count: 0
    };
    render() {
        return (
            // <div>  --instead of another div (because the root div is a div already, use fragment
            <React.Fragment>
                {/*--instead of hardcoding below, use the state method to add values dynamically*/}
              {/*<h1>Hello Bobbie</h1>*/}
              {/*-- change the above to span once the state property is implemented.*/}
              {/*  <span>{this.state.count}</span>*/}
                {/*--in between the curly braces, we can write any valid javascript expression.  even call a function.*/}
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
            // </div>
        );
    }
    formatCount() {
        // return this.state.count === 0 ? 'Zero' : this.state.count;
    //   -- when ever there is repetitive code like this.state.count - use object destructuring instead:
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
        //--further more, we can return a jsx expression instead of plain text.
        // return count === 0 ? <h1> Zero </h1> : count;
    }
}
export default Counter;