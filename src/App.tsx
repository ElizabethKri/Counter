import './App.css'
import DataCounter from "./DataCounter.tsx";
import Counter from "./Counter.tsx";
import {useEffect, useState} from "react";


function App() {
    //'Введите значение и нажмите кнопку SET'
    const [value, setValue] = useState<number>(0)
    const [valueNumStart, setValueNumStart] = useState<number>(0)
    const [valueNumMax, setValueNumMax] = useState<number>(7)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isEdit, setIsEdit] = useState<boolean>(true)



    useEffect (() => {
        const valueStringNumStart = localStorage.getItem('counterValueNumStart')
        if (valueStringNumStart){
            return setValueNumStart(JSON.parse(valueStringNumStart))
        }
    }, []);

    useEffect (() => {
        const valueStringNumMax = localStorage.getItem('counterValueNumMax')
        if (valueStringNumMax){
            return setValueNumMax(JSON.parse(valueStringNumMax))
        }
    }, []);

    //'enter values and press set'

    return <>
        <DataCounter valueNum={value}
                     setValue={setValue}
                     valueNumStart={valueNumStart}
                     setValueNumStart={setValueNumStart}
                     valueNumMax={valueNumMax}
                     setValueNumMax={setValueNumMax}
                     disabled={disabled}
                     setDisabled={setDisabled}
                     error={error}
                     setError={setError}
                     isEdit = {isEdit}
                     setIsEdit = {setIsEdit}
        />
        <Counter  valueNum = {value}
                  setValue = {setValue}
                  valueNumStart = {valueNumStart}
                  valueNumMax = {valueNumMax}
                  error = {error}
                  isEdit = {isEdit}
        />

    </>
}

export default App
