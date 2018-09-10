import React, { Component } from 'react';
// Components
import Seeker from './components/Seeker';
import Result from './components/Result';
class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      images: []
    };
  }

  requestApi = () => {
    // 10069061-f3ccd001d44a51c6f0ae4d8ef
    const api_key = '10069061-f3ccd001d44a51c6f0ae4d8ef';
    const inputUser = this.state.search;
    const url = `https://pixabay.com/api/?key=${api_key}=${inputUser}`;

    fetch(url)
      .then(res => res.json())
      .then(result => this.setState({ images: result.hits }));
  };

  searchData = search => {
    // console.log(search);
    this.setState(
      {
        search
      },
      () => {
        this.requestApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image seeker...</p>
          <Seeker searchData={this.searchData} />
        </div>
        <Result images={this.state.images} />
      </div>
    );
  }
}

export default App;
