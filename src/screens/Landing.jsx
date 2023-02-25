
import React from 'react'
import "../App.css"

const Landing = ({ setUser, setStart }) => {

    const handleClick = (e) => {
        e.preventDefault()
        setStart(true)
    }

    const handleUser = (e) => {
        setUser(
            { username: e.target.value }
        )
    }

    return (
        <div className='container'>
            <h1 className='title'>Hola, ingresa tu nombre para empezar</h1>

            <form className='form'>
                <input type="name" onChange={handleUser} className='start-input' />
                <button type='submit' onClick={(e) => handleClick(e)} className='start-button'>VAMOS</button>
            </form>

        </div>
    )
}

export default Landing