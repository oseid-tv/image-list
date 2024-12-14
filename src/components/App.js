import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";

class App extends React.Component {
  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=47513703-0496c1f53313eee209eceb317&q=${entry}&image_type=photo`
    );
    console.log(response.data.hits);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
