import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {CounterType} from "./Counter.tsx";


type DataCounterType = {
    disabled: boolean
    setDisabled: (disabled: boolean) => void
    setError: (error: string | null) => void
    setValueNumStart: (valueNumStart: number) => void
    setValueNumMax: (valueNumMax: number) => void
    isEdit: boolean
    setIsEdit: (isEdit: boolean) => void

} & CounterType

const DataCounter = ({
                         valueNum,
                         setValue,
                         valueNumStart,
                         setValueNumStart,
                         valueNumMax,
                         setValueNumMax,
                         disabled,
                         setDisabled,
                         error,
                         setError,
                         setIsEdit
                     }: DataCounterType) => {

    // const [text, setText] = useState(false)


    const styleMaxInput = error === 'Incorrect max value!' ? 'error' : ''
    const styleStartInput = error === 'Incorrect start value!' ? 'error' : ''



    const onChangeStartValHandler = (value: number) => {
        setValueNumStart(value)
        setIsEdit(true)
        const errorConditionStart = value === valueNumMax || value < 0 || value > valueNumMax
        if (errorConditionStart) {
            setDisabled (true)
            setError ('Incorrect start value!')
            setIsEdit(false)
        } else {
            setDisabled (false)
            setError (null)
            setIsEdit(true)
        }
    }

    const onChangeMaxValHandler = (valueNum: number) => {
        // актуальное значение value - valueNumMax
        setValueNumMax (valueNum)
        setIsEdit(true)
        const errorConditionMax = valueNumStart === valueNum || valueNum < 0 || valueNum < valueNumStart
        if (errorConditionMax) {
            setDisabled (true)
            setError ('Incorrect max value!')
            // setText('')
            setIsEdit(false)
        } else {
            setDisabled (false)
            setError (null)
            setIsEdit(true)
        }

    }

    const onClickHandlerSet = () => {
        setValue (valueNumStart)
        setIsEdit(false)
        if (valueNum === valueNumStart) {
            setDisabled (false)
        } else {
            setDisabled (true)
            // setText('')
        }
        localStorage.setItem ('counterValueNumStart', JSON.stringify (valueNumStart))
        localStorage.setItem ('counterValueNumMax', JSON.stringify (valueNumMax))
        localStorage.setItem('counterValueNum', JSON.stringify(valueNumStart))

    }


    return (
        <div style={{'border': '1px solid green'}}>
            <div>Max value: <Input style={styleMaxInput} value={valueNumMax} setValue={onChangeMaxValHandler}/></div>
            <div>Start value: <Input style={styleStartInput} value={valueNumStart} setValue={onChangeStartValHandler}/>
            </div>
            {/*Записывает данные*/}
            <Button title={'set'} onClick={onClickHandlerSet} disabled={disabled}/>
        </div>
    );
};

export default DataCounter;