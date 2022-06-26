import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";
import Button from "./components/Button";

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
   /* const MyFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) =>{
        console.log("Hello! I'm Maxim");}
    const MySecondSubscriber = () =>{
        console.log("Hello! I'm Sveta");}*/

    const onClickHandler = (name:string) => {
    console.log(name);}

   /* const foo1 = () => {
        console.log(100200);
    }

    const foo2 = (num: number) => {
        console.log(num);
    }*/
    const Button1Foo = (subscriber:string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }
    const Button2Foo = (subscriber:string, age: number) => {
        console.log(subscriber, age);
    }
  return (

        <div className="App">
          <NewComponent students={students} topCars={topCar}/>
            {/*<button onClick={(event) => {console.log("Hello")}}>MyYoutubeChannel-1</button>*/}
            {/*<button onClick={(event )=> onClickHandler("Maxim")}>MyYoutubeChannel1-1</button>
            <button onClick={(event )=> onClickHandler("Sveta")}>MyYoutubeChannel1-2</button>
            <button onClick={(event )=> onClickHandler("Artem")}>MyYoutubeChannel1-3</button>*/}
          {/*  <button onClick={foo1}>1</button>
            <button onClick={(event)=>foo2(100200)}>2</button>*/}
            <Button name="MyYoutubeChanel-1" callBack={()=>Button1Foo("I'm Max", 29, "live in Minsk")}/>
            <Button name="MyYoutubeChanel-2" callBack={()=>Button2Foo("I'm Sveta", 23)}/>
            <Button name="StupidButton" callBack={()=>console.log("I'm supid button")}/>
        </div>
  );
}

export default App;
