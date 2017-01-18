import React, {Component} from 'react';

export class PostForm extends Component {
  static propTypes = {
    submitPostData: React.PropTypes.func.isRequired
  };

  render() {
    // const submitPostData = this.props.submitPostData;
    const {submitPostData} = this.props;

    return <form onSubmit={e => {
      e.preventDefault();
      submitPostData({
        title: this.refs.titleInput.value,
        body: this.refs.bodyInput.value,
        name: this.refs.nameInput.value,
        password: this.refs.passwordInput.value
      });

      this.refs.titleInput.value = '';
      this.refs.bodyInput.value = '';
      this.refs.nameInput.value = '';
      this.refs.passwordInput.value = '';

      this.refs.titleInput.focus();
    }}>
      <div>
        <input ref="titleInput" type="text" placeholder="title" autoFocus/>
      </div>
      <div>
        <textarea ref="bodyInput" placeholder="body"/>
      </div>
      <div>
        <input ref="nameInput" type="text" placeholder="name"/>
      </div>
      <div>
        <input ref="passwordInput" type="password" placeholder="password"/>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>;
  }
}

import {connect} from 'react-redux';
import {postActionCreators} from '../postStore';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitPostData: data => dispatch(postActionCreators.createPost(data))
  };
};

const connected = connect(undefined, mapDispatchToProps)(PostForm);

export default connected;