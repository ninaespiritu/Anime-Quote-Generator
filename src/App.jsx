import './App.css';
import { useState, useEffect } from 'react'


const App = () => {

    const [joke, setJoke] = useState({})

    useEffect(() => {
        handleFetch()
    }, [])

    useEffect(() => {
        console.log('The joke has changed.')
    }, [joke])

    const handleFetch = async () => {
        const response = await fetch("https://animechan.vercel.app/api/random")
        const data = await response.json()
        console.log(data)
        setJoke(data)
    }

    return (
        <div className='app'>
            <div className='header'>
            <h1>Anime Quotes</h1>
            <button onClick={handleFetch}>Get Random Quote</button>
 
            </div>
            <div className='content'>
                <h2>{joke.quote}</h2>
                <div className='info'>
                    <h3>{joke.character}, "{joke.anime}"</h3>
                </div>
            </div>
            
        </div>
    );
}

export default App;
