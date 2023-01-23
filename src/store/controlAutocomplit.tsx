import { makeAutoObservable } from "mobx"
import {getCountryByName} from '../api/apiService'
import {CountryInfo} from '../interface/interface'


class controlAutocomplit {

    text = '';
    array: Array<CountryInfo> = []


    constructor(public count: number = 0) {
        makeAutoObservable(this)
    }

    async checkMatches(value: string) {
        this.text = value;
        this.array = (await getCountryByName(value)).slice(0, this.count)
    }

    clickHint(value: string) {
        this.text = value;
        this.array = []
    }

}

export default controlAutocomplit