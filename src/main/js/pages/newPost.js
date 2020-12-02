const React = require('react');
const ReactDOM = require('react-dom');

import Navigation from '../components/navbar';
import PostForm from './posts/postForm';

class NewPost extends React.Component {

  render() {
    return (
        <div>
            <Navigation />
            <PostForm />
        </div>
    )
  }
}

export default NewPost;