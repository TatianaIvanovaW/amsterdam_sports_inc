import { users } from "../../data/users";

export const findUser = (userId) => {
  const user = users.find((user) => {
    return user.id === parseInt(userId);
  });
  return {
    type: "fetch/user",
    payload: user,
  };
};
