import './App.css';
import { useState } from 'react'

const App = () => {

    const [joke, setJoke] = useState({})

    const handleFetch = async () => {
        const response = await fetch("https://animechan.vercel.app/api/random")
        const data = await response.json()
        console.log(data)
        setJoke(data)
    }

    return (
        <div>
            <h1>Anime Quotes</h1>
            <button onClick={handleFetch}>Get a Random Quote</button>
            <div>{joke.quote}</div>
            <div>{joke.character}</div>
            <div>{joke.anime}</div>
        </div>
    );
}

export default App;
