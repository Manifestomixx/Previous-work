import React from 'react';
import { useState } from 'react';

const ClickEvent = () => {
    // console.log(useState([]));
    const [name,setName] = useState('Manifesto')
    // let name = Manifesto



    function handleClick(){
        console.log("hello world!");
    }

    // function below is for parameters and arguments
    let handleClickAgain = function(duration){
        console.log("you clicked me" + duration);
        
    }

    // one more function

    let changeName = () => {
        // name = "Lateef";
        // console.log(name);
        if (name === "Manifesto"){
            setName("Lateef")
        }else{
            setName("Manifesto")
        }
    }
  return (
    <>
    <main>
        <hr />
    <h2>Click Event</h2>
    <button className='btn btn-primary btn-lg' onClick={handleClick}>Click moi</button>
    {/* the below function is meant to explain how to write a function that has a parameter and argument */}

    <button className='btn btn-danger btn-lg' onClick={()=>handleClickAgain('2x')}>Click again</button>

    {/* one more function */}
    <h2>{name}</h2>
    <button className='btn btn-success btn-lg' onClick={changeName}>click to change name</button>
    </main>
    </>
  )
}

export default ClickEvent