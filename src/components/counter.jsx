import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3' ]
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {/*--use the map method: */}
                    {/*{this.state.tags.map(tag => <li>{ tag }</li>)}*/}

                    {/*--you will have an error in the console because it needs a key to uniquely identify each item in the list. because if the state of an element in the virtual DOM changes (say, item 3), react need to quickly figure out what element has changed and where in the dom it need to make changes to keep the DOM in sync with the virtual DOM.  So when you use the map method for a list of items set the key in the real world you'll use the property id ex:  key.id:   */}
                    {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>
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