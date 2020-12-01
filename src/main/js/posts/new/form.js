import React from 'react';

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="content" placeholder="i just bought a broccoli"></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default NewPostForm;
