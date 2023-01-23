import React from "react";
import './App.css'
import ControlButtons from '../ControlButtons/ControlButtons'
import ControlAutocomplit from '../ControlAutocomplit/controlAutocomplit'
import {testRightButtons, testRightAndLeftButtons, testAutocomplitThreeTips, testAutocomplitTenTips} from '../testData'

const App = () => {

  return (
    <div className="app">
        <p>Тест: контрол с 2 кнопками справа</p>
        <ControlButtons buttons={testRightButtons} />
        <p>Тест: контрол с 1 кнопкой справа и 1 кнопкой слева</p>
        <ControlButtons buttons={testRightAndLeftButtons} />
        <p>Тест: кол-во подсказок - 3</p>
        <ControlAutocomplit model={testAutocomplitThreeTips}/>
        <p>Тест: кол-во подсказок - 10</p>
        <ControlAutocomplit model={testAutocomplitTenTips}/>
    </div>
  );
}

export default App;
