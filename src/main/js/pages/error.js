const React = require('react');
const ReactDOM = require('react-dom');

import Navigation from '../components/navbar';

class Error extends React.Component {

  render() {
    return (
        <body style="background-image:url('http://www.todayifoundout.com/wp-content/uploads/2019/04/flipping-the-bird.png');background-size:100%;">
            <center>
              <h1 style="color:white;margin-top:300px">
                Error 404
              </h1>
            </center>
        </body>
    )
  }
}

export default Error;