import _ from 'lodash';
import React, { Component } from 'react';
// delete logo import is okay
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VidList from './components/videolist';
import VideoDetail from './components/video_detail';
import './App.css';
import axios from 'axios';
const API_KEY = "AIzaSyDBjU0kAuua9EGPVTLYSM7_TB4K9f7F2cc";


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      videos: [],
      selectedVideo: null,
      term: null
    };
    this.videoSearch('videogame music');
{/*So set your blank state to what you want your stock values to be in this case the api values*/}
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }


  render() {
    const vidSearch = _.debounce((term) => {this.videoSearch(term)}, 300 )
    return (
      <div>
      <SearchBar onSearch={vidSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VidList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
      </div>

    );
  }
}

export default App;
