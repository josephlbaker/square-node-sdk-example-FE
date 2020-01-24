import React, { Component } from 'react';

class Home extends Component {

  state = {
    apiResponse: ''
  }

  fetchItems = () => {
    fetch("http://localhost:8000/", {
      method: 'GET'
    })
      // .then(results => console.log(results))
      // .then(res => res.text())
      .then(res => res.json())
      .then(res => console.log(res))
      .then(res => this.setState({ apiResponse: res }))
  };

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <p>{this.state.apiResponse}</p>
    );
  }
}

export default Home;