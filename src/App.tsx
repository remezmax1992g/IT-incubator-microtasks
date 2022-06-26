import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";

function App() {
    let students  = [
        {id: 1, name: "Max", age: 21},
        {id: 2, name: "Misha", age: 24},
        {id: 3, name: "Alex", age: 23},
        {id: 4, name: "Pasha", age: 29},
        {id: 5, name: "Oleg", age: 19},
        {id: 6, name: "Dan", age: 18},
        {id: 7, name: "Fil", age: 27},
        {id: 8, name: "John", age: 20},
        {id: 9, name: "Jack", age: 26},
        {id: 10, name: "Yan", age: 31},
        {id: 11, name: "Oliver", age: 51},
    ]
    const topCar = [
        {manufacture: "BMW", model: "m5cs"},
        {manufacture: "Mercedes", model: "e63b"},
        {manufacture: "Audi", model: "v12q"},
    ]
  return (

        <div className="App">
          <NewComponent students={students} topCars={topCar}/>
        </div>
  );
}

export default App;
