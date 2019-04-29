import React from "react";
import { observer, inject } from "mobx-react";

@inject("myStore")
@observer
class Counter extends React.Component {
    render() {
        const { myStore } = this.props;
        return (
            <div>
                <h1> 휘도 : {myStore.counter}</h1>
                <button id="plus-btn" onClick={() => myStore.brightly(10)}>
                    +
                </button>
                <button id="minus-btn" onClick={myStore.darkly}>
                    -
                </button>
            </div>
        );
    }
}

export default Counter;