import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";


type DefaultButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({title, onClick, disabled}: DefaultButton) => {

    return (
        <button onClick={onClick} disabled={disabled} >{title}</button>
    );
};

export default Button;