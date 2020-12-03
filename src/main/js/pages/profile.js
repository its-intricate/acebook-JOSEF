const React = require('react');
const ReactDOM = require('react-dom');

class Profile extends React.Component {

  render() {
    return (
        <div>
            <center className="mt-5">
                <h1>My Profile</h1>
                <img
                src="https://i.pinimg.com/736x/d1/3f/a5/d13fa5a26526fefa7069c0848dd7a21c.jpg"
                width="20%" />
                <h3>Makers Student</h3>
                <h6>Bio: I need some coffee!</h6>
            </center>
        </div>
    )
  }
}

export default Profile;