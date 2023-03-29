import { useEffect } from "react";


const API_URL = 'http://www.omdbapi.com?apikey=8733c30d';

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
        <h1>App</h1>
    )
}

export default App;