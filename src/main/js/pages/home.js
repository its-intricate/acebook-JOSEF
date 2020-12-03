const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder';
import Navigation from '../components/navbar';
import PostForm from './posts/postForm';

class Home extends React.Component {

  render() {
    return (
        <div>
            <Navigation />
            <center>
                <PostForm />
                <PostsBuilder />
            </center>
        </div>
    )
  }
}

export default Home;