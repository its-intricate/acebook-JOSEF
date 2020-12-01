import React from 'react';
import Posts from './posts'
const client = require('../client');

class PostsBuilder extends React.Component {
    constructor(props) {
    super(props)
    this.state = {posts: []};
    }

    componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
    }

    onDelete(id) {
    client({method: 'DELETE', path: '/api/posts/2'+id}).then(response => {

        });
    };

    render() {
        return (
      <Posts posts={this.state.posts} onDelete={this.onDelete}/>
        )
    }
}

export default PostsBuilder;
