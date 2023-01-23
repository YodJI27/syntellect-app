import { makeAutoObservable } from "mobx"
import {IButton} from '../interface/interface'

class controlButtons {

    text = '';

    constructor(public buttonsLeft: IButton[] = [], public buttonsRight: IButton[] = []) {
        makeAutoObservable(this)
    }

    setText(value: string) {
        this.text = value;
    }
}

export default controlButtons