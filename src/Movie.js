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
    console.log(`in componentDidMount for ${this.props.name}`);
    const apiUrl = `http://netflixroulette.net/api/api.php?title=${encodeURIComponent(this.props.name)}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => this.setState({posterUrl: json.poster}))
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="Movie">
        <div>
          {this.props.name}
        </div>
        <div>
          <img
            className="Movie-poster"
            src={this.state.posterUrl} />
        </div>
        <div onClick={ this.props.likeMovie }>
          <i className={"fa fa-3x " + (this.props.liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up')}></i>
        </div>
        <div onClick={ this.props.unlikeMovie }>
          <i className={"fa fa-3x " + (this.props.liked ? 'fa-thumbs-o-down' : 'fa-thumbs-down')}></i>
        </div>
      </div>
    );
  }
}

export default Movie;

