import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <MovieImage poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MovieImage extends Component{
    render() {
        return(
            <img src={this.props.poster} />
        );
    }
}

export default Movie;