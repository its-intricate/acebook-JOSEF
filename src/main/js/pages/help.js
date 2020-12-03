const React = require('react');
const ReactDOM = require('react-dom');

import Navigation from '../components/navbar';

class Help extends React.Component {

  render() {
    var style = {
            backgroundImage:"url(" + "http://www.todayifoundout.com/wp-content/uploads/2019/04/flipping-the-bird.png" + ")",
            backgroundSize:"100%",
            height: "100vh"
        };
    return (
        <div>
            <Navigation />
            <body style={style}>
                <center>
                  <h1 color="white" margin-top= "300px">
                    Sorry I cannot help you.
                  </h1>
                </center>
            </body>
        </div>
    )
  }
}

export default Help;