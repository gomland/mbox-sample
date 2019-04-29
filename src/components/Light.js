import React from "react";
import {inject, observer} from "mobx-react";

@inject("myStore")
@observer
class Light extends React.Component {
    render() {
        const { myStore } = this.props;

        return (
            <div>
                <div
                    style={{
                        width: 100,
                        height: 100,
                        border: "1px solid #000",
                        borderRadius: 50,
                        background: "black"
                    }}
                >
                    <div
                        style={{
                            width: "inherit",
                            height: "inherit",
                            borderRadius: "inherit",
                            background: "yellow",
                            opacity: myStore.light ? myStore.counter * 0.01 : 0
                        }}
                    />
                </div>
                <button id="switch-btn" onClick={myStore.onOff}>
                    {myStore.light ? "끄기" : "켜기"}
                </button>
            </div>
        );
    }
}

export default Light;