import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyNavbar from './components/myNavbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      doctors: []
    };
  }

  getDoctors = () => {
    fetch('http://localhost:3004/doctors')
      .then(response => response.json())
      .then(data => {
        Object.keys(data).forEach(doctor => {
          let docs = this.state.doctors.concat(data[doctor]);
          this.setState({ doctors: docs });
        });
      });
  }

  render() {
    const docs = this.state.doctors.map((doc, idx) => {
      return (
        <li key={idx}>
          Dr. {doc.first_name} {doc.last_name} Specialty: {doc.specialty}, Area: {doc.area}, Score: {doc.score}
        </li>
      )
    })

    return (
      <div className="App">
        <MyNavbar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getDoctors}><code>GET</code></button>
        <ol>
          {docs}
        </ol>
      </div>
    );
  }
}

export default App;
