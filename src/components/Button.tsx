import React from 'react';

type ButtonType = {
    name: string;
    callBack: () => void;
}

const Button = (props: ButtonType) => {
    const onClickHolder = () => {
        props.callBack();
    }
    return (
        <button onClick={onClickHolder}>{props.name}</button>
    );
};

export default Button;