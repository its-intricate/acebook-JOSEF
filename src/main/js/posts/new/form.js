import React from 'react';

class NewPostForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="ace" placeholder="i just bought a broccoli"></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default NewPostForm;
