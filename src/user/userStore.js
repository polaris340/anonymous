import uuid from 'uuid';

export const userActions = {
  CREATE_USER: 'CREATE_USER'
};

export const userActionCreators = {
  createUser: name => ({type: userActions.CREATE_USER, name})
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userActions.CREATE_USER:
      const createdUserId = uuid.v4();
      return {
        ...state,
        [createdUserId]: {
          id: createdUserId,
          name: action.name
        }
      };
    default:
      return state;
  }

};