const React = require('react');
const ReactDOM = require('react-dom');

const client = require('../client');

class Signup extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
            firstname: 'hi',
            lastname: '',
            email: '',
            password: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
    };

    myChangeHandler(event)  {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    };

    handleSubmit() {
        this.addUser()
    };

    addUser() {
          const data = this.state.value;
          console.log(data);
          const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(this.state.value)
          };
          fetch('http://localhost:8080/api/users', requestOptions)
          .then(response => response.json())
      };

  render() {
    return (

        <div>
            <center>
            <div className="mt-5" style={{width:"60%", marginBottom:"500px", textAlign:"left"}}>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                   <div className="form-group row">
                      <label for="firstname" className="col-sm-3 col-form-label">First Name</label>
                      <input className="form-control col-sm-7" type="text" name="firstname" placeholder="John" value={this.state.value} onChange={this.myChangeHandler}/>
                   </div>
                   <div className="form-group row">
                      <label for="lastname" className="col-sm-3 col-form-label">Last Name</label>
                      <input className="form-control col-sm-7" type="text" name="lastname" placeholder="Smith" value={this.state.value} onChange={this.myChangeHandler}/>
                   </div>
                   <div className="form-group row">
                      <label for="email" className="col-sm-3 col-form-label">Email Address</label>
                      <input className="form-control col-sm-7" type="text" name="email" placeholder="johnsmith@example.com" value={this.state.value} onChange={this.myChangeHandler}/>
                   </div>
                   <div className="form-group row">
                      <label for="password" className="col-sm-3 col-form-label">Password</label>
                      <input className="form-control col-sm-7" type="password" name="password" placeholder="Enter Password" value={this.state.value} onChange={this.myChangeHandler}/>
                   </div>

                   <input type="submit" className="col-sm-10 btn btn-info" value="Confirm" />
                </form>
              </div>
            </center>
        </div>
    )
  }
};

export default Signup;