import { users } from "../../data/users";

export const fetchUsers = (users) => {
  return {
    type: "fetch/users",
    payload: users,
  };
};

export const findAllUsers = () => {
  return async (dispatch, getState) => {
    const data = users;
    dispatch(fetchUsers(data));
  };
};

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    const data = users.filter((user) => {
      return user.id !== userId;
    });
    dispatch(fetchUsers(data));
  };
};
