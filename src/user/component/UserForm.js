import React, {Component} from 'react';

export class UserForm extends Component {
  static propTypes = {
    createUser: React.PropTypes.func.isRequired
  };

  render() {
    // const createUser = this.props.createUser;
    const {createUser} = this.props;

    return <form
    onSubmit={e => {
      e.preventDefault();
      createUser(this.refs.nameInput.value);
    }}
    >
      <input ref="nameInput" type="text" placeholder="name"/>
      <button type="submit">create user</button>
    </form>;
  }
}


import {connect} from 'react-redux';
import {userActionCreators} from '../userStore';

const mapDispatchToProps = dispatch => {
  return {
    createUser: name => dispatch(
      userActionCreators.createUser(name)
    )
  };
};

const connected = connect(undefined, mapDispatchToProps)(UserForm);

connected.propTypes = {};

export default connected;

