const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder';
import Navigation from '../components/navbar';

class Home extends React.Component {

  render() {
    return (
        <div>
            <Navigation />
            <div>
                <PostsBuilder />
            </div>
        </div>
    )
  }
}

export default Home;