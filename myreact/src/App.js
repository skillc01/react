import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cds: [] };
  }

  // add a function to go to the server
  // and get some stuff
  async componentDidMount() {
    axios
      .get("http://localhost:8081/albums")
      .then((response) => {
        console.log(response.data);
        this.setState({ cds: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
