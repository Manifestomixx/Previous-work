import React from 'react'
import reactLogo from '../assets/react.svg'

const DynamicValues = () => {
    let countryName = "Nigeria";
    let continent = "Africa";
    let randomNumbers = Math.random();
    let tutors = ["Joeboy","Rema"];
    let fbLink = "https://facebook.com"
  return (
    <>
    <main className='container'>
    <h2 style={{textAlign:"center", color:"pink"}}>Dynamic Values</h2>
    <hr />
    <h2>My country {countryName} is in {continent}</h2>
    <h2>{randomNumbers}</h2>
    <h2>{tutors.join(" ")}</h2>
    <a href={fbLink} target='blank'>facebook</a>
    <img src={reactLogo} alt="react-pic" />

    </main>


    
    </>
  )
}

export default DynamicValues