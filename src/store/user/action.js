import { users } from "../../data/users";

export const fetchUser = (user) => {
  return {
    type: "fetch/user",
    payload: user,
  };
};

export const findUser = (userId) => {
  return async (dispatch, getState) => {
    const user = users.find((user) => {
      return user.id === parseInt(userId);
    });
    dispatch(fetchUser(user));
  };
};

// export const editUser = (userId) => {
//   return async (dispatch, getState) => {
//     const user = users.find((user) => {
//       return user.id === parseInt(userId);
//     });
//     dispatch(findUser(user));
//   };
// };
