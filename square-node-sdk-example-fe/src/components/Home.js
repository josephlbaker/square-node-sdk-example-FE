import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemNames: [],
      itemImages: []
    }
    // this.fetchItems();
    // this.fetchItems = this.fetchItems.bind(this);
  }

  componentWillMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    fetch("http://localhost:8000/", {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        for (let i = 0; i < res.objects.length; i++) {
          if (res.objects[i].type === 'ITEM') {
            let joined = this.state.itemNames.concat(res.objects[i].item_data.name);
            this.setState({
              itemNames: joined
            })
          }
          if (res.objects[i].type === 'IMAGE') {
            let joined = this.state.itemImages.concat(res.objects[i].image_data.url);
            this.setState({
              itemImages: joined
            })
          }
        }
      })
  };

  render() {
    return (
      <p>{this.state.itemNames}</p>
    );
  }
}

export default Home;
