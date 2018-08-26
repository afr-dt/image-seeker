import React, { Component } from 'react';

class Seeker extends Component {
  searchRef = React.createRef();

  handleData = e => {
    e.preventDefault();
    console.log(this.searchRef.current.value);
    // We get value from input
    const search = this.searchRef.current.value;
    // We send to main component(App.js)
    this.props.searchData(search);
  };

  render() {
    return (
      <form onSubmit={this.handleData}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.searchRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search img"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-success btn-block"
              value="Serch..."
            />
          </div>
        </div>
      </form>
    );
  }
}
export default Seeker;
