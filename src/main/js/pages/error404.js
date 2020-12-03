const React = require('react');
const ReactDOM = require('react-dom');

import Navigation from '../components/navbar';

class Error404 extends React.Component {

  render() {
    var style = {
            backgroundImage:"url(" + "http://www.todayifoundout.com/wp-content/uploads/2019/04/flipping-the-bird.png" + ")",
            backgroundSize:"100%",
            height: "100vh"
        };
    return (
        <div>
            <Navigation />
            <div style={style}>
                <center>
                  <h1 style={{color:"white", paddingTop:"250px"}}>
                    Error404
                  </h1>
                </center>
            </div>
        </div>
    )
  }
}

export default Error404;