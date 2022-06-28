import React from 'react';
import {FilterType} from "./App";

type CurrentMoneyType = {
    currentMoney: Array<MoneyType>;
    onClickFilterHandler: (nameButton: FilterType) => void;
}


type MoneyType = {
    banknote: string;
    nominal: number;
    number: string;
}

const NewComponent1 = (props: CurrentMoneyType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote} </span>
                                <span>{objFromMoneyArr.nominal} </span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={()=>props.onClickFilterHandler("all")}>all</button>
                <button onClick={()=>props.onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={()=> props.onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </div>
    );
};

export default NewComponent1;