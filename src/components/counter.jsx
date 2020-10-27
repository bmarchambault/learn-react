import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        //    random 200 X 200 pic:
        //     imageURL: 'https://picsum.photos/200'
    };
    //  -- can apply styles this way:
    //  styles = {
    //      fontSize: 15,
    //      fontWeight: "bold"
    //  }  ;

    render() {
        return (
            <React.Fragment>
{/*-----we want the image src to be dynamic.  we can hard code the source, or: */}
                {/*<img src={this.state.imageURL} alt=""/>*/}

{/*------ we add classes buy using the attribute className=""  */}
                <span className=" badge badge-primary m-2 ">{this.formatCount()}</span>
{/*-----------STYLING-----------*/}
            {/*<span style={this.styles} className=" badge badge-primary m-2 ">{this.formatCount()}</span>*/}
{/*------- inline styles no need for style property above and use double curly braces:   */}
            {/*    <span style={{fontSize: 30}} className=" badge badge-primary m-2 ">{this.formatCount()}</span>*/}
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;