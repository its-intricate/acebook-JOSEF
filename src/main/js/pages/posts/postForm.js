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
      <form onSubmit={this.handleSubmit}>
        <label>
          What is on your mind?
          <input type="text" placeholder="type here..." value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default PostForm;