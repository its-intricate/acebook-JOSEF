import React from 'react';

const Post = (props) => {
    var url = props.post._links.self.href;
    var postdate = props.post.postdate
    var date = postdate.slice(0,10)
    var time = postdate.slice(11,16)
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
            <div className='post-time'>
			    {time}
			</div>
			<div className='post-date'>
                {date}
            </div>

            <button id={url} name={props.post.content} className="btn btn-outline-secondary" onClick={props.handleUpdate}>Edit</button>
            <button id={props.post._links.self.href} className="btn btn-outline-danger" onClick={props.handleDelete}>Delete</button>
		</div>
	)
}

export default Post;
