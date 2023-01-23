import controlButtons from "../store/controlButtons"
import controlAutocomplit from "../store/controlAutocomplit"

export interface IButton {
    text: string;
    callback: () => void;
    id: number
}

export interface CountryInfo {
    name: string;
    fullName: string;
    flag: string;
}

export interface IbuttonProps {
    buttons: controlButtons
}

export interface IAutocomplit {
    model: controlAutocomplit
}

export interface IInputProps {
    value: string;
    type: string;
    placeholder: string;
    onChange: (e: any) => void;
}
