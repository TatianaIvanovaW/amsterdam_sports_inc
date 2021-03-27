import { users } from "../../data/users";

export const fetchUsers = () => {
  return {
    type: "fetch/users",
    payload: users,
  };
};
