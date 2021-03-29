export const fetchUser = (user) => {
  return {
    type: "fetch/user",
    payload: user,
  };
};

export const findUser = (userId, users) => {
  return async (dispatch, getState) => {
    const user = users.find((user) => {
      return user.id === parseInt(userId);
    });
    dispatch(fetchUser(user));
  };
};

export const editUser = (userId, users, newUser) => {
  return async (dispatch, getState) => {
    dispatch(fetchUser(newUser));
  };
};
