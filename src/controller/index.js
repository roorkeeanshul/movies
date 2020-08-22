const express = require('express')
const routerList = express.Router()
const movieService = require('../business/movie-service')
const requestHelper = require('../../helpers/http-request')
const responseHelper = require('../../helpers/http-response')

// Save Movie detail in DB
routerList.post('/save-movie', async (req, res) => {

    try {
        const input = requestHelper.getBodyParams(req);
        console.log('save movie index.js',input);

        const movieSaveStatus = await movieService.saveMovie(input);
        console.log('movieSaveStatus', movieSaveStatus);
        return responseHelper.success(res, movieSaveStatus);

    } catch (error) {
        console.log(error);
        return responseHelper.error(res, error);
    }
});

//Get Movie Information by ID
routerList.get('/get-movie', async (req, res) => {

    try {
        const input = requestHelper.getQueryParams(req);
        console.log('get movie',input);

        const movieInfo = await movieService.getMovie(input);
        return responseHelper.success(res, movieInfo);

    } catch (error) {
        console.log(error)
        return responseHelper.error(res, error);
    }

});

//Get All Movies' Information
routerList.get('/get-all-movies', async (req, res) => {

    try {
        console.log('get all movie');

        const moviesInfo = await movieService.getAllMovies();
        return responseHelper.success(res, moviesInfo);

    } catch (error) {
        console.log(error)
        return responseHelper.error(res, error);
    }

});

module.exports = routerList