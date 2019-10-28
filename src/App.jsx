import React from 'react';

// Components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// API
import api from './utils/api';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: {},
  };

  componentDidMount() {
    // Set default search term
    this.onFormSubmit("Pizza Hut")
  }

  // Make API call to Youtube and update state
  onFormSubmit = async value => {

    const res = await api
      .get('/search', {
        params: {
          q: value,
        },
      })
      .catch(err => console.log(err));

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  // Sets currentVideo 
  onVideoSelect = video => {
    console.log('Selected Video', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid stackable">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
