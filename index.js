const URL = "https://movies-app.prakashsakari.repl.co/api/movies";


const getMovies = async ()=>{

    try{
        const data= await axios.get(URL);
        console.log(data);
    }


}