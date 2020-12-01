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
    client({method: 'POST', path: '/api/posts', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content.value })
    })
    console.log('DONE')
    // curl -X POST 'localhost:8080/api/posts'
    // -d '{"content": "Hi, Folks!"}'
    // -H 'Content-Type: application/json'
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
