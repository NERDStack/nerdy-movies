const DocumentDBClient = require('documentdb').DocumentClient;
const dataConfig = require('./config');

module.exports = (() => {
  const collLink = `dbs/${dataConfig.databaseName}/colls/${dataConfig.collectionName}`;

  function queryMovies() {
    return new Promise((resolve, reject) => {
      const docdbClient = new DocumentDBClient(
        process.env.DOCUMENTDB_URI,
        { masterKey: process.env.DOCUMENTDB_KEY });

      docdbClient.readDocuments(collLink)
        .toArray((err, docs) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(docs);
          }
        });
    });
  }

  function likeMovie(movie) {
    return new Promise((resolve, reject) => {
      const docdbClient = new DocumentDBClient(
        process.env.DOCUMENTDB_URI,
        { masterKey: process.env.DOCUMENTDB_KEY });

      const documentLink = `${collLink}/${movie.id}`;
      const movieUpdate = Object.assign({}, movie, { liked: true });

      docdbClient.replaceDocument(documentLink, movieUpdate, (err, updated) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(updated);
        }
      });
    });
  }

  function unlikeMovie(id) {

  }

  return {
    queryMovies,
    likeMovie,
    unlikeMovie
  };
})();
