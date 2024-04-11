import React from 'react';
import { useState } from 'react';
import MoreDetails from './MoreDetails';

const ConditionalRendering = () => {
    const [determinant,setDeterminant] = useState(false);

    // || this will only show Mern on the console if it is false and show only determinant when it is true
    // let showData = determinant || "Mern";
    // let hideData = determinant && "Mern";
    // console.log(showData);
    // console.log(hideData);
    function toggle(){
        if(determinant === false){
            setDeterminant(true)

        }else{
            setDeterminant(false) 
        }
    }
  return (
    <>
    <main className='my-5 container text-center'>
        <h1 className='text-primary'>Conditional Rendering</h1>
        {determinant && <MoreDetails/>}
        <button className='btn btn-success btn-lg' onClick={toggle}>{!determinant ? "see more" : "see less"}</button>
    </main>
    </>
  )
}

export default ConditionalRendering