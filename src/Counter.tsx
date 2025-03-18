import Button from "./Button.tsx";

export type CounterType = {
    valueNum: number
    setValue: (value: number) => void
    valueNumStart: number
    valueNumMax: number
    error: string | null
    isEdit: boolean
}

const Counter = ({
                     valueNum,
                     setValue,
                     valueNumStart,
                     valueNumMax,
                     error,
                     isEdit
                 }: CounterType) => {


    const incDisabled = valueNum === valueNumMax || valueNumStart < 0 || valueNumMax < 0 || valueNumMax === valueNumStart || valueNumStart > valueNumMax
    const resetDisabled = valueNumStart < 0 || valueNumMax < 0 || valueNumMax === valueNumStart || valueNumStart > valueNumMax

    const onClickHandlerInc = () => {
        setValue (valueNum + 1)
    }

    const onClickHandlerReset = () => {
        setValue (valueNumStart)
    }

    const textValue = 'Enter values and press set'

    return (
        <div style={{'border': '1px solid white', 'padding': '25px'}}>
            {/*<h2 className={valueNumMax === valueNum || !!error ? 'error-text' : ''}>{text ? text : valueNum || error}</h2>*/}
            <h2 className={valueNumMax === valueNum || !!error ? 'error-text' : ''}>{isEdit ? textValue : error || valueNum}</h2>
            {/*Добавляют +1, до тех пор, когда доходим до макс значения*/}
            <Button title={'inc'} onClick={onClickHandlerInc} disabled={incDisabled}/>
            {/*Обнуляет до статового значения*/}
            <Button title={'reset'} onClick={onClickHandlerReset} disabled={resetDisabled}/>
        </div>
    );
};

export default Counter;