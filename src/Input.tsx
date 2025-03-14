import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import * as React from "react";


type InputDefault  = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputType

type InputType = {
    value: number
    setValue: (value: number) => void
    style: string
}

const Input: React.FC<InputDefault> = ({value, setValue, style}) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
    }


    return (
        <input className={style} value={value} type={"number"} onChange={onChangeHandler}  />
    );
};

export default Input;