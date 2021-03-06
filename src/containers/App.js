import React, { Component } from 'react'
import Header from '../common/Header'

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App