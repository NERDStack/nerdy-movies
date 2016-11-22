import React, { Component } from 'react';

class MovieInput extends Component {
  constructor(props) {
    super(props);

    this.onAddMovieClick = this.onAddMovieClick.bind(this);
  }

  onAddMovieClick() {
    const nameElement = document.getElementById('movieName');

    this.props.addMovie({
      name: nameElement.value
    });

    nameElement.value = '';
    nameElement.focus();
  }

  componentDidMount() {
    document.getElementById('movieName').focus();
  }

  render() {
    return (
      <div>
        <input id="movieName" type="text" placeholder="Movie Name" />
        <button onClick={this.onAddMovieClick}>Add Movie</button>
      </div>
    );
  }
}

export default MovieInput;

