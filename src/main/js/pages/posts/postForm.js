import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', id: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.addPost()
    alert('New Post Added: ' + this.state.value);
    event.preventDefault();
    window.location.reload(false);
  }

  addPost() {
      const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ content: this.state.value })
      };
      fetch('http://localhost:8080/api/posts', requestOptions)
      .then(response => response.json())
  }

  render() {
    return (
      <form className="form-inline mt-5 mb-4" style={{width:"70vw"}} onSubmit={this.handleSubmit}>
        <label className="mr-sm-3" for="new_post">What is on your mind?</label>
        <input type="text" id="new_post" style={{width:"70%"}} className="form-control mr-sm-3" placeholder="type here..." value={this.state.value} onChange={this.handleChange} />
        <button type="submit" className="btn btn-info">Post</button>
      </form>
    );
  }
}

export default PostForm;