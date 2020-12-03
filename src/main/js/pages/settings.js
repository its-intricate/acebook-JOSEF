const React = require('react');
const ReactDOM = require('react-dom');
import Navigation from '../components/navbar';

class Settings extends React.Component {

  render() {
    return (

        <div>
            <Navigation />
            <center>
            <div style={{width:"75%", textAlign:"left"}}>
                <h1>Settings</h1>
                <form>
                   <div class="form-group row">
                      <label for="profile" className="col-sm-3 col-form-label">Upload profile picture</label>
                      <input type="file" className="form-control-file col-sm-7" id="profile" />
                   </div>
                   <div className="form-group row">
                      <label for="firstname" className="col-sm-3 col-form-label">First Name</label>
                      <input className="form-control col-sm-7" type="text" id="firstname" placeholder="John" />
                   </div>
                   <div className="form-group row">
                      <label for="lastname" className="col-sm-3 col-form-label">Last Name</label>
                      <input className="form-control col-sm-7" type="text" id="lastname" placeholder="Smith" />
                   </div>
                   <div className="form-group row">
                      <label for="email" className="col-sm-3 col-form-label">Email Address</label>
                      <input className="form-control col-sm-7" type="text" id="email" placeholder="johnsmith@example.com" />
                   </div>
                   <div className="form-group row">
                      <label for="age" className="col-sm-3 col-form-label">Age</label>
                      <input className="form-control col-sm-7" type="text" id="age" placeholder="Enter Age" />
                   </div>
                   <div className="form-group row">
                      <label for="location" className="col-sm-3 col-form-label">Location</label>
                      <select className="form-control col-sm-7" id="location">
                        <option>England</option>
                        <option>Scotland</option>
                        <option>Wales</option>
                        <option>Northern Ireland</option>
                        <option>Outside of the UK</option>
                      </select>
                   </div>
                   <input type="submit" placeholder="choose..." className="col-sm-10 btn btn-info" value="Confirm" />
                </form>
              </div>
            </center>
        </div>
    )
  }
}

export default Settings;