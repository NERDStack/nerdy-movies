import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posterUrl: ''
    };
  }

  componentDidMount() {
    const apiUrl = `http://netflixroulette.net/api/api.php?title=${encodeURIComponent(this.props.name)}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => this.setState({posterUrl: json.poster}))
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (!this.state.posterUrl) {
      return <div />;
    }

    return (
      <div className="Movie">
        <div className="Movie-title">
          {this.props.name}
        </div>
        <div>
          <img
            className="Movie-poster"
            src={this.state.posterUrl} />
        </div>
        <div className="Movie-voters">
          <div onClick={ this.props.likeMovie }>
            <i className={
              "fa fa-3x fa-check Movie-like " +
              (this.props.liked ? 'Movie-vote-selected' : 'Movie-vote-unselected')
            }></i>
          </div>
          <div onClick={ this.props.unlikeMovie }>
            <i className={
              "fa fa-3x fa-times Movie-unlike " +
              (this.props.liked ? 'Movie-vote-unselected' : 'Movie-vote-selected')
            }></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;

