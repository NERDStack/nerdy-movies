const DocumentDBClient = require('documentdb').DocumentClient;
const dataConfig = require('./config');

module.exports = (() => {
  function queryMovies() {
    return new Promise((resolve, reject) => {
      const docdbClient = new DocumentDBClient(
        process.env.DOCUMENTDB_URI,
        { masterKey: process.env.DOCUMENTDB_KEY });

      const collLink = `dbs/${dataConfig.databaseName}/colls/${dataConfig.collectionName}`;

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

  return {
    queryMovies
  };
})();
