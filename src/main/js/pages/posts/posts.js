import React from 'react';
import Post from './post'

class Posts extends React.Component {
    constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleDelete(event) {
      const id = event.target.id
      this.props.onDelete(id);
      window.location.reload(false);
    }

    handleUpdate(event) {
       const id = event.target.id
       const text = event.target.name
       const update = prompt("What would you like to change your post to?", text);
        const requestOptions = {
                     method: 'PUT',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify({ content: update })
             };
             fetch(id, requestOptions)
             .then(response => response.json())
        window.location.reload(false);
    }


	render() {
		return (
      <article className='posts-main'>
        <h1 className='posts-title'>
           <center>Posts</center>
        </h1>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
		)
	}

    getPosts() {
        return this.props.posts.map(post =>
            <Post key={post._links.self.href} post={post} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
        );
    }

}

export default Posts;
