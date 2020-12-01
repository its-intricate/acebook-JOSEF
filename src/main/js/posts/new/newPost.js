import React from 'react';
import NewPostForm from './form'

const client = require('../../client');

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const content = event.target.content;
    alert(content.value);
  }

  render() {
    return (
      <div className='new-post'>
        <p>What's on your mind???????</p>
        <NewPostForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default NewPost;
