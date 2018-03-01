import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

 /* axios.post('https://5t04a776mf.execute-api.us-east-1.amazonaws.com/dev/validate', {
    rawURL: 'https://www.instagram.com/p/Bfwm6UXl9H2/?taken-by=francismallmann'
  })
  .then(function (response) {
    return axios.post('https://5t04a776mf.execute-api.us-east-1.amazonaws.com/dev/create', response.data)
  })
  .then(function (response){
    console.log(response);
    return axios.post('https://5t04a776mf.execute-api.us-east-1.amazonaws.com/dev/assemble', Object.assign({},{_id : response.data._id, y: 0, n: 4}));
  })
  .then(function (response){
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
