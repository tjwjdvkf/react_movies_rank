import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <MovieImage />
                <h1>영화 제목</h1>
            </div>
        );
    }
}

class MovieImage extends Component{
    render() {
        return(
            <div>
                <img src="http://www.newsinstar.com/data/photos/20180937/art_15367158497873_e15bff.jpg" />
            </div>
        );
    }
}

export default Movie;