import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='container d-flex justify-content-between'>
    <h2>Manifesto</h2>
        <ul className='d-flex gap-5 list-unstyled mt-3'>
            <li>Home</li>
            <li>Prooduct</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar