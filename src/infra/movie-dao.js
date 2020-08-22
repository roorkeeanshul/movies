const { movie } = require('../../library/schema/movies');

const saveMovie = async(input) => {
    try {
        console.log('saveMovie');

        const newMovie = new movie(input);

        const saveMovieInfo = await newMovie.save();
        return saveMovieInfo;

    } catch (error) {
        return error;
    }
    
};

const getMovie = async(input) => {
    try {

        const getMovieInfo = await movie.findById(input).exec();
        console.log('getMovieInfo', getMovieInfo)
        return getMovieInfo;

    } catch (error) {
        return error;
    }
    
};

const getMovies = async(input) => {
    try {

        const getMoviesInfo = await movie.find({});
        console.log('getMovies', getMoviesInfo)
        return getMoviesInfo;

    } catch (error) {
        return error;
    }
    
};

module.exports = {
    saveMovie,
    getMovie,
    getMovies
}
