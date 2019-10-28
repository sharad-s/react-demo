import React from 'react';
import './App.css';

// Components
import SearchBar from './components/SearchBar';

// API
import api from './utils/api';

class App extends React.Component {

  state ={
    videos:[]
  }


  onFormSubmit = async value => {
    const res = await api.get('/search', {
      params: {
        q: value,
      },
    }).catch(err => console.log(err));
    console.log(res);

    this.setState({videos: res.data.items})
  };

  render() {
    return (
      <div className="App">
          <SearchBar onFormSubmit={this.onFormSubmit} />
          <p> I have {this.state.videos.length} videos </p>
      </div>
    );
  }
}

export default App;
