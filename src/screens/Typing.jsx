import React from 'react'
import { useEffect, useState } from 'react'
import "../App.css"
import words from '../api/words'

const Typing = ({ user }) => {

    const [displayWords, setDisplayWords] = useState([])

    const qWords = (x) => {

        setDisplayWords([])
        let palabras = []
        for (let i = 0; i < x; i++) {
            let random = Math.floor(Math.random() * (x - 1));
            palabras.push(words[random])
        }
        setDisplayWords(palabras)
    }

    useEffect(() => {
        console.log(displayWords[0])
    }, [displayWords])


    useEffect(() => {
        qWords(25)
    }, [])


    return (
        <div className='container2'>
            {/* <h2 style={{ color: "red", fontSize: "25px", fontFamily: 'Press Start 2P' }}>
                {user.username.toUpperCase()} podes elegir la cantidad de palabras que quieras, cuando tipees la primera letra, el reloj comenzara a correr.
            </h2> */}

            <div className='typing-container'>
                <div className='button-container'>
                    <button className='quantity-button' onClick={() => qWords(25)}> 25</button>
                    <button className='quantity-button' onClick={() => qWords(50)}>50</button>
                    <button className='quantity-button' onClick={() => qWords(100)}>100</button>
                </div>

                <div className='words-container'>
                    {displayWords.map(word =>
                        <span className='words'>{word}</span>
                    )}
                </div>

                <form className='form2'>
                    <input type="name" className='words-input' />
                    <button className='reset-button'>
                        reset
                    </button>
                </form>



            </div>

        </div>
    )
}

export default Typing