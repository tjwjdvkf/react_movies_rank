import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const title = [
    "완벽한 타인",
    "보헤미안 랩소디",
    "창궐",
    "암수살인",
    "미쓰백"
]

const poster = [
  "http://www.newsinstar.com/data/photos/20180937/art_15367158497873_e15bff.jpg",
  "http://image.cine21.com/resize/cine21/poster/2018/0518/12_06_54__5afe434e1f297[H800-].PNG",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9te4ZPkCjmfMbzua__AogoVkO8_pSQg_k9HLioQM6B2lPPnix7w",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpaFaBzed4mShvSJPVD2vQf4W618DFT8OFa-KNAPTuJLTWi5x",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53iAJpVivS5RAVVNB_MoEs_a6sTOcbv2tA2XhNgz6ovcj6Yeq"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={title[0]} poster={poster[0]} />
        <Movie title={title[1]} poster={poster[1]} />
        <Movie title={title[2]} poster={poster[2]} />
        <Movie title={title[3]} poster={poster[3]} />
        <Movie title={title[4]} poster={poster[4]} />
      </div>
    );
  }
}

export default App;
