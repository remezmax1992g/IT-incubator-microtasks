import React from 'react';

type NewComponentType = {
    students: Array<StudentType>;
    topCars: Array<TopCarType>;
}

type StudentType = {
    id: number;
    name: string;
    age: number;
}

type TopCarType = {
    manufacture: string;
    model: string;

}

const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name} </span>
                            <span>age: {objectFromStudentArray.age}</span>
                        </li>
                    );
                })}
            </ul>
            <table border={1}>
                {props.topCars.map((TopCarFromArray, index) => {
                    return (<tr key={index}>
                        <th>{TopCarFromArray.manufacture}</th>
                        <th>{TopCarFromArray.model}</th>
                    </tr>)
                })}
            </table>
        </div>
    );
};

export default NewComponent;