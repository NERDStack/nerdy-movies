const DocumentDBClient = require('documentdb').DocumentClient;
const dataConfig = require('./config');

const collLink = `dbs/${dataConfig.databaseName}/colls/${dataConfig.collectionName}`;

module.exports.queryMovies = (id) => {
  return new Promise((resolve, reject) => {
    const docdbClient = new DocumentDBClient(
      process.env.DOCUMENTDB_URI,
      { masterKey: process.env.DOCUMENTDB_KEY });

    if (id) {
      const querySpec = {
        query: 'SELECT * FROM root r WHERE r.id = @id',
        parameters: [{
          name: '@id',
          value: id
        }]
      };
      docdbClient.queryDocuments(collLink, querySpec)
        .toArray((err, docs) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(docs);
          }
        });
    }
    else {
      docdbClient.readDocuments(collLink)
        .toArray((err, docs) => {
          if (err) {
            reject(err);
          }
          else {
            resolve(docs);
          }
        });
    }
  });
}

module.exports.likeMovie = (movie) => {
  return new Promise((resolve, reject) => {
    const docdbClient = new DocumentDBClient(
      process.env.DOCUMENTDB_URI,
      { masterKey: process.env.DOCUMENTDB_KEY });

    const documentLink = movie._self;
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

module.exports.unlikeMovie = (movie) => {
  return new Promise((resolve, reject) => {
    const docdbClient = new DocumentDBClient(
      process.env.DOCUMENTDB_URI,
      { masterKey: process.env.DOCUMENTDB_KEY });

    const documentLink = movie._self;
    const movieUpdate = Object.assign({}, movie, { liked: false });

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

