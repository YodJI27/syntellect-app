import './Input.css'
import {IInputProps} from '../interface/interface'


const Input = (props: IInputProps) => {
    return (
        <div>
            <input className='input' type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} ></input>
        </div>
    )
}

export default Input