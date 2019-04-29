import React from 'react';
import {Provider} from "mobx-react";
import Light from "./components/Light";
import Counter from "./components/Counter";
import MyStore from "./store/MyStore";

const myStore = new MyStore();

function App() {
    return (
        <Provider myStore={myStore}>
            <div>
                <Light/>
                <hr/>
                <Counter/>
            </div>
        </Provider>
    );
}

export default App;
