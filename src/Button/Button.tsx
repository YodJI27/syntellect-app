import './Button.css'
import { IButton } from '../interface/interface'


const Button = (props: IButton) => {
    return (
        <div>
            <button className='button' key={props.id} onClick={props.callback}>{props.text}</button>
        </div>
    )
}

export default Button