import './controlAutocomplit.css'
import { observer } from "mobx-react";
import {IAutocomplit} from '../interface/interface'
import Input from '../Input/Input'
const ControlAutocomplit = observer(({ model }: IAutocomplit) => {

    const handleCheck = (text: string) => {
       model.text = text;
       model.checkMatches(text)
    }

    const handleChangeInput = (text: string) => {
        model.clickHint(text)
    }

    return (
        <div className='auto_complit'>
            <Input type="text" placeholder="Введите значение" value={model.text} onChange={(e) => handleCheck(e.target.value)} /> 
            <div className='block_hint'>
                {model.array.map((item) => (
                    <div key={item.name} className="hint" onClick={() => handleChangeInput(`${item.fullName}, ${item.name}`)}>
                        <p className="name">{item.fullName},</p>
                        <p className="name">{item.name}</p>
                        <img className="image" alt={item.name} src={item.flag} width={30} height={20} />
                    </div>
                ))}
            </div>
        </div>
    )
})

export default ControlAutocomplit