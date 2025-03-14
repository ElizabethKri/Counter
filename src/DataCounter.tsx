import Input from "./Input.tsx";
import Button from "./Button.tsx";
import {CounterType} from "./Counter.tsx";


type DataCounterType = {
    disabled: boolean
    setDisabled: (disabled: boolean) => void
    setError: (error: string | null) => void
    setValueNumStart: (valueNumStart: number) => void
    setValueNumMax: (valueNumMax: number) => void
    onClick: () => void

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
                         onClick
                     }: DataCounterType) => {

   // const [text, setText] = useState(false)


    const styleMaxInput = error === 'Incorrect max value!' ? 'error' : ''
    const styleStartInput = error === 'Incorrect start value!' ? 'error' : ''

    const onChangeStartValHandler = (value: number) => {
        setValueNumStart(value)
        if (value === valueNumMax || value < 0 || value > valueNumMax){
            setDisabled(true)
            setError('Incorrect start value!')
        }
        else {
            setDisabled(false)
            setError(null)
        }


    }

    const onChangeMaxValHandler = (valueNum: number) => {
        // актуальное значение value - valueNumMax
        setValueNumMax(valueNum)
        if(valueNumStart === valueNum || valueNum < 0 || valueNum < valueNumStart) {
            setDisabled(true)
            setError('Incorrect max value!')
        } else {
            setDisabled(false)
            setError(null)
        }
    }

    const onClickHandlerSet = () => {
        setValue(valueNumStart)
        if(valueNum === valueNumStart){
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
        onClick()
    }


    return (
        <div style={{'border': '1px solid green'}}>
            <div>Max value: <Input  style={styleMaxInput} value={valueNumMax} setValue={onChangeMaxValHandler} /></div>
            <div>Start value: <Input style={styleStartInput} value={valueNumStart} setValue={onChangeStartValHandler}/></div>
            {/*Записывает данные*/}
            <Button title={'set'} onClick={onClickHandlerSet} disabled={disabled}  />
        </div>
    );
};

export default DataCounter;