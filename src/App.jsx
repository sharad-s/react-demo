import React from 'react';
import './App.css';

// Components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

// API
import api from './utils/api';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: {},
  };

  onFormSubmit = async value => {
    const res = await api
      .get('/search', {
        params: {
          q: value,
        },
      })
      .catch(err => console.log(err));
    console.log(res);

    this.setState({ videos: res.data.items });
  };

  onVideoSelect = video => {
    console.log('Selected Video', video);
    this.setState({selectedVideo: video})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
