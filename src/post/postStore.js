import uuid from 'uuid';

export const postActions = {
  CREATE_POST: 'CREATE_POST'
};

export const postActionCreators = {
  createPost: ({title, body, name, password}) => {
    return {
      type: postActions.CREATE_POST,
      title,
      body,
      name,
      password
    };
  }
};

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case postActions.CREATE_POST:
      const createdPostId = uuid.v4();
      const now = Date.now();
      return {
        ...state,
        [createdPostId]: {
          id: createdPostId,
          title: action.title,
          body: action.body,
          name: action.name,
          password: action.password,
          created: now,
          modified: now
        }
      };
    default:
      return state;
  }
};