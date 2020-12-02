import React from 'react';

const Post = (props) => {
    var url = props.post._links.self.href;
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
		<button id={url} className={props.post.content} onClick={props.handleUpdate}>Edit</button>
        <button id={props.post._links.self.href} onClick={props.handleDelete}>Delete</button>
		</div>
	)
}

export default Post;
