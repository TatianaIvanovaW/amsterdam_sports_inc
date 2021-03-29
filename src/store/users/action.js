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

export const deleteUser = (userId, allUsers) => {
  return async (dispatch, getState) => {
    const data = allUsers.filter((user) => {
      return user.id !== userId;
    });
    dispatch(fetchUsers(data));
  };
};

export const addNewUser = (newUser, allUsers) => {
  return async (dispatch, getState) => {
    const data = allUsers;
    data.push(newUser);
    dispatch(fetchUsers(data));
  };
};
