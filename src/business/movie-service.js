const movieDao = require('../infra/movie-dao')

const saveMovie = async(input) => {

    try {
        let movie = {
           'name': input.movie_name,
           'img': input.movie_img,
           'summary': input.movie_summary
        };
        const saveStatus = await movieDao.saveMovie(movie)
        return saveStatus;

    } catch (error) {
        return error;
    }
   
}

const getMovie = async(input) => {

    try {
        const movie = await movieDao.getMovie(input.movieId);
        let response = [];
        if(movie !== null){

            let movieItem = {};
            movieItem.name = movie.name;
            movieItem.img = movie.img;
            movieItem.summary = movie.summary;

            response.push(movieItem);
        }
        return response;

    } catch (error) {
        return error;
    }
   
}

const getAllMovies = async() => {

    try {
        const movie = await movieDao.getMovies();
        let response = [];
        if(movie !== null){
            movie.forEach(item => {
                let movie = {};

                movie.name = item.name;
                movie.img = item.img;
                movie.summary = item.summary;

                response.push(movie);
            })
            
        }
        return response;

    } catch (error) {
        return error;
    }
   
}

module.exports = {
    saveMovie,
    getMovie,
    getAllMovies
}