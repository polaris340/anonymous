import React, {Component} from 'react';

class UserForm extends Component {
  static propTypes = {
    createUser: React.PropTypes.func.isRequired
  };

  render() {
    // const createUser = this.props.createUser;
    const {createUser} = this.props;

    return <form>
      <input type="text" placeholder="name"/>
      <button type="submit">create user</button>
    </form>;
  }
}
