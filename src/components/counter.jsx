import React, { Component } from "react";

class Counter extends Component {
    //add the state property and set it to an object.
    //state is a special property in react components,  its an object that includes data that the component needs.
    state = {
        count: 0
    };
    render() {

        return (
            // <div>  instead of another div (because the root div is a div already, use fragment
            <React.Fragment>
                {/*//instead of hardcoding below, use the state method to add values dynamically*/}
              {/*<h1>Hello Bobbie</h1>*/}
              {/*//change the above to span once the state property is implemented.*/}
                <span>{this.state.count}</span>
                <button>Increment</button>
            </React.Fragment>

            // </div>
        );
    }
}
export default Counter;