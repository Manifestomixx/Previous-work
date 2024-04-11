import React from 'react';
import { useState } from 'react';

const UseStateBasics = () => {
    // const [clientName,setClientName] = useState("Bukola");
    // const [clientAge,setClientAge] = useState("80");
    // const [clientState,setClientState] = useState("Kogi");
    const [client,setClient] = useState({
        name: "Bukola",
        age: 80,
        state: "Kogi"
    })

    function changeDetails(){
        setClient({...client,name:"Edafe",age:60})
    }
  return (
    <>
    <main className='container text-center my-4 border'>
        <hr />
        <h1>UseState Basics</h1>
        <hr />
        <h2>My name is {client.name} i am {client.age} years old and from {client.state} state</h2>
        <button className="btn btn-success btn-lg" onClick={changeDetails}>change details</button>
    </main>
    </>
  )
}

export default UseStateBasics