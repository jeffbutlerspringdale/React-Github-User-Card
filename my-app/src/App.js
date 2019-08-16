import React from 'react';
import axios from 'axios';
import Card from './components/Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      followers: []
    };

  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/jeffbutlerspringdale`)
      .then(response => this.setState(response))
  }
  render() {

    return (<h1 data={this.state.data} />)

  }
}

export default App;