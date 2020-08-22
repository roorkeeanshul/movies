const { db, mongoose } = require('../config/connection-manager')

console.log('db in movies schema', db)

const moviesSchema = new mongoose.Schema({
    name: String,
    img: String,
    summary: String
  });

const movie = mongoose.model('Movie', moviesSchema);

module.exports = {
    movie
};
