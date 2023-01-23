import './ControlButtons.css'
import Button from '../Button/Button'
import { observer } from "mobx-react-lite"
import {IbuttonProps} from '../interface/interface'
import Input from '../Input/Input'

const ControlButtons = observer(({buttons}: IbuttonProps) => {

    const handleChangeText = (text: string) => {
        buttons.setText(text)
    }

    return (
        <div className="main">
            <div className="buttons">
                {buttons.buttonsLeft.map((item) => {
                    return <Button id={item.id} text={item.text} callback={item.callback}/>
                })}
            </div>
            <div className='control'>
                <Input type="text" placeholder="Введите значение"  value={buttons.text} onChange={(e) => handleChangeText(e.target.value)} /> 
            </div>
            <div className="buttons">
                {buttons.buttonsRight.map((item) => {
                    return <Button id={item.id} text={item.text} callback={item.callback}/>
                })}
            </div>
        </div>
    )
})
export default ControlButtons