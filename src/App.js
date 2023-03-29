import { useEffect } from "react";

import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com?apikey=8733c30d';

const movie1 = {
        "Title": "Superman, Spiderman or Batman",
        "Year": "2011",
        "imdbID": "tt2084949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {

    //async movie function (takes time to fetch movies)
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`) //get response from url
        const data = await response.json(); //once we get the response

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <div className="app">
            <h1>Movies Hub</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="superman"
                    onChange={() => {}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster} alt={movie1.Title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;