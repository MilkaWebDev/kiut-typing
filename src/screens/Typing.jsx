import React from 'react'
import { useEffect, useState } from 'react'
import "../App.css"
import words from '../api/words'

const Typing = ({ user }) => {

    const [displayWords, setDisplayWords] = useState([]);
    const [selectWord, setSelectWord] = useState("");
    //actualiza cuando toco barra
    const [count, setCount] = useState(0);

    const qWords = (x) => {

        setDisplayWords([])
        let palabras = []
        for (let i = 0; i < x; i++) {
            let random = Math.floor(Math.random() * (x - 1));
            palabras.push({ palabra: words[random] })
        }
        setDisplayWords(palabras)
    }

    const handleWord = (e) => {
        setSelectWord(e.target.value)
    }

    //falta cambiar clase si es true o false
    const verifyWord = (e) => {
        e.preventDefault()
        if (displayWords[count] === selectWord) console.log(true)
        else console.log(false)
        setCount(count + 1)
        setSelectWord("")
    }

    useEffect(() => {
        console.log(displayWords[0])
    }, [displayWords])


    useEffect(() => {
        qWords(25);
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
                    {displayWords.map((item, index) =>
                        <span className={count === index ? 'selected-word' : 'words'}>{item.palabra}</span>
                    )}
                </div>

                <form className='form2'>
                    <input
                        type="name"
                        value={selectWord}
                        onChange={handleWord}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                verifyWord(e);
                            }
                        }}
                        className='words-input' />
                    <button className='reset-button'>
                        reset
                    </button>
                </form>



            </div>

        </div>
    )
}

export default Typing