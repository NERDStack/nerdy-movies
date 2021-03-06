module.exports = {
  remove: [
    { file: 'public/favicon.ico' },
    { file: 'server/data/config.js' },
    { file: 'src/actions/action-types.js' },
    { file: 'src/actions/movie-actions.js' },
    { file: 'src/reducers/movies-reducer.js' },
    { file: 'src/Movie.css' },
    { file: 'src/Movie.js' },
    { file: 'src/MoviesContainer.css' },
    { file: 'src/MoviesContainer.js' },
    { file: 'src/MoviesList.css' },
    { file: 'src/MoviesList.js' },
    { file: 'setup.js' }
  ],
  clean: [
    {
      file: 'public/index.html',
      pattern: /Nerdy/
    },
    {
      file: 'server/data/index.js',
      clear: true
    },
    {
      file: 'src/reducers/index.js',
      pattern: /movies/
    },
    {
      file: 'server/routes/api.js',
      deleteRange: '5,53'
    },
    {
      file: 'src/App.js',
      pattern: /Movies|logo/
    },
    {
      file: 'src/App.css',
      deleteRange: '15,16'
    },
    {
      file: 'README.md',
      clear: true
    },
    {
      file: 'package.json',
      pattern: /cleanup.*mop/
    }
  ],
  add: [
    { file: 'src/actions/.gitkeep' }
  ]
};
