import React from 'react';
import Post from './post'

class Posts extends React.Component {
    constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.sort = this.sort.bind(this)
    }

    handleDelete(event) {
      const id = event.target.id
      var sure = confirm("Are you sure you want to delete this post?")
      if (sure) {
          this.props.onDelete(id);
          window.location.reload(false);
      }
    }

    handleUpdate(event) {
       const id = event.target.id
       const text = event.target.name
       const date = new Date();
       console.log(date);
       const update = prompt("What would you like to change your post to?", text);
       const data = { content: update, postdate: date }
       if (update) {
         const requestOptions = {
                     method: 'PUT',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify(data)
         };
         fetch(id, requestOptions)
         .then(response => response.json())
         window.location.reload(false);
       }
    }

    sort() {
        const unsorted = this.props.posts;
        const sorted = unsorted.sort((a, b) => {
            return new Date(b.postdate) - new Date(a.postdate);
        });
        return sorted
    }

	render() {
		return (
      <article style={{marginBottom:"500px"}} className='posts-main'>
        <h1 className='posts-title mb-2'>
           <center>Posts</center>
        </h1>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
		)
	}

    getPosts() {
        return this.sort().map(post =>
            <Post key={post._links.self.href} post={post} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
        );
    }

}

export default Posts;