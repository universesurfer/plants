import React from "react";
import trefle from '../api/trefle';
import SearchBar from "./SearchBar";
import PlantList from "./PlantList";

class App extends React.Component {

  state = { data: [] }

  onSearchSubmit = async term => {
    const response = await trefle.get('/plants/search', {
        params: {
          token: 'iCI4pjz2LuPvh5WVJvusxR02oNlMPi7FRN2LcBB0mYI',
          q: term
         }
    })
    this.setState({ data: response.data.data })
    console.log(this.state);
    console.log(response.data);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <PlantList plants={this.state.data}/>
      </div>

    );
  }
}

export default App;
