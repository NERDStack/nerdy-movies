module.exports = {
  remove: [
    { file: 'server/data/index.js' },
    { file: 'server/data/config.js' },
    { file: 'src/actions/action-types.js' },
    { file: 'src/actions/movie-actions.js' },
    { file: 'src/reducers/index.js' },
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
      file: 'server/routes/api.js',
      deleteRange: '4,54'
    },
    {
      file: 'src/App.js',
      pattern: /Movies/
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
    { file: 'server/data/.gitkeep' },
    { file: 'src/actions/.gitkeep' },
    { file: 'src/reducers/.gitkeep' }
  ]
};
