import React from 'react';
import { data } from '../Db';
import { useState } from 'react';

const List = () => {
    const [info,setInfo] = useState(data)
    function clearAll(){
        setInfo([])
    }
   
    console.log(data);
  return (
    <>
    <main className="container my-5 text-center border">
        <h2 className='text-success'>List</h2>
        <section>
            {info.map((datum)=>{
                return(
                    <div key={datum.id}>
                        <h1>{datum.name}</h1>
                        <h2>{datum.profession}</h2>
                        <p>{datum.description}</p>
                        <button className='btn btn-primary btn-lg'>add student</button>
                    </div>
                )
            })}
            <button className='btn btn-danger btn-lg' onClick={clearAll}>clear all</button>
        </section>
        <section>
            {/* <div>
            <h1>Obi</h1>
            <h2>front-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div>
            <div>
            <h1>Simi</h1>
            <h2>back-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div>
            <div>
            <h1>Edafe</h1>
            <h2>front-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div>
            <div>
            <h1>Bukola</h1>
            <h2>front-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div>
            <div>
            <h1>Steph</h1>
            <h2>front-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div>
            <div>
            <h1>Onons</h1>
            <h2>front-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div>
            <div>
            <h1>Glory</h1>
            <h2>front-end dev</h2>
            <p>I am a dev at Tech studio</p>
            </div> */}
        </section>

    </main>
    </>
  )
}

export default List