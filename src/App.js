import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Fletcher',
    playlists: [
      {
        name: 'Playlist 1',
        songs: [{name: 'song 1', duration: 1000},
          {name: 'song 2', duration: 1000},
          {name: 'song 3', duration: 1000}]
      },
      {
        name: 'Playlist 2',
        songs: [{name: 'song 21', duration: 2000},
          {name: 'song p22', duration: 2000},
          {name: 'song 23', duration:2000}]
      },
      {
        name: 'Playlist 3',
        songs: [{name: 'song 31', duration: 3000},
        {name: 'song 32', duration: 3000},
        {name: 'song 33', duration: 3000}]
      }
    ]
  }
};

class PlalistCounter extends Component {
  
  render() {
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
      <h2>{this.props.playlists && this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HourCounter extends Component {
  
  render() {
    // used reduce to get the songs out of the object literal of data
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [] );
    //used reduce again to get the time from the songs. returned the sum
    let totalDuration = allSongs.reduce((sum, eachSong) => {
        return sum + eachSong.duration;
    }, 0);

    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
      <h2>{Math.floor(totalDuration/60)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return(
      <div style={{defaultStyle}}>
        <img/>
        <input type="text" onKeyUp={event => this.props.onTextChange(event.target.value)} />
      </div>
    );
  }
}

class Playlist extends Component {
  
  render() {
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        
        <h3>{this.props.playlist.name}</h3>

        <ul>
          {this.props.playlist.songs.map(song => 
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    //calling an initial serverData that is empty
    this.state = 
    {serverData: {},
    filterString: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      //pulling in the fake server data
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {

    return (
      <div className="App">
        {this.state.serverData.user ? /* checks if there is data before trying to pull it into our props */
        <div>
          <h1>{this.state.serverData.user.name}'s Playlist</h1>        
          <PlalistCounter playlists={this.state.serverData.user.playlists} />
          <HourCounter playlists={this.state.serverData.user.playlists} />       
          <Filter onTextChange={text => this.setState({filterString: text})} />

          {this.state.serverData.user.playlists.filter( playlist =>
            playlist.name.toLowerCase().includes(
              this.state.filterString.toLowerCase()) 
          ).map(playlist => 
            <Playlist playlist={playlist} />
          )}
 
        </div>: <h1>Loading...</h1>
        }
      </div>
    );

  }
}

export default App;
