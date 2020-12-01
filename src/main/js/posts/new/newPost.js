import React from 'react';
import NewPostForm from './form'

class NewPost extends React.Component {
  render() {
    return (
      <div className='new-post'>
        <p>What's on your mind???????</p>
        <NewPostForm />
      </div>
    )
  }
}

export default NewPost;
