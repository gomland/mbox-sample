import { observable, action } from "mobx";

export default class MyStore {
    @observable
    counter = 0;

    @observable
    light = false;

    @action
    onOff = () => {
        this.light = !this.light;
    };

    @action
    brightly = val => {
        this.counter += val;
    };

    @action
    darkly = () => {
        this.counter--;
    };
}
