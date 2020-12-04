import React from 'react';
import { Button,Collapse } from 'react-bootstrap';

const Post = (props) => {
    var url = props.post._links.self.href;
    var postdate = props.post.postdate;
    var date = postdate.slice(0,10);
    var time = postdate.slice(11,16);
    const [open, setOpen] = React.useState(false);
    var listId = "list" + postdate;
    var commentId = "comment" + postdate;


    function addComment() {
      var list = document.getElementById(listId);
      var listItem = document.createElement("li");
      var input = document.getElementById(commentId);
      listItem.innerText = input.value;
      list.appendChild(listItem);
      window.location.reload(false);
    }


	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}
			</div>
            <div className="mt-4 d-flex">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls={postdate}
                aria-expanded={open}
                variant="outline-info"
                className="btn btn-sm mr-2"
              >
                View Comments
                <span className="badge badge-info">2</span>
              </Button>
              <button class="btn btn-sm mr-5 btn-outline-info">like</button>
              <button id={url} name={props.post.content} className="btn btn-sm mr-2 btn-outline-dark" onClick={props.handleUpdate}>Edit</button>
              <button id={props.post._links.self.href} className="btn btn-sm btn-outline-danger" onClick={props.handleDelete}>Delete</button>
                <div className='ml-auto mt-2 post-time'>
                    {time}
                </div>
                <div className='ml-4 mr-3 mt-2 post-date'>
                    {date}
                </div>
            </div>
            <Collapse in={open}>
                <div className="mt-4" id={postdate}>
                  Comments:
                  <ul id={listId}>
                    <li>Brilliant</li>
                    <li>Great stuff!</li>
                  </ul>
                  <form onSubmit={addComment} className="form-inline mt-3 mb-3">
                      <label className="mr-sm-3" for={props.post.content}>Comment</label>
                      <input type="text" id={commentId} style={{width:"80%"}} className="form-control mr-sm-3" placeholder="type here..." />
                      <button type="submit" className="btn btn-sm btn-info">Add</button>
                  </form>
                </div>
            </Collapse>
		</div>

	)
}

export default Post;