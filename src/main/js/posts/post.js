import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
        <button id={props.post._links.self.href} onClick={props.handleDelete}>Delete</button>
		</div>
	)
}

export default Post;
