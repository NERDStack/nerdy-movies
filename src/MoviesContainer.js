import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from './actions/movie-actions';
import MoviesList from './MoviesList';
import MovieInput from './MovieInput';
import './MoviesContainer.css';

class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    const moviesApiUrl = `/api/movies`;
    fetch(moviesApiUrl)
      .then(res => res.json())
      .then(movies => {
        movies.forEach(this.props.actions.addMovie);
      });
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="MoviesContainer">
        <MovieInput addMovie={this.props.actions.addMovie} />
        <MoviesList movies={movies}
          likeMovie={this.props.actions.likeMovieAndPersist}
          unlikeMovie={this.props.actions.unlikeMovie} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

