import { sports } from "../../data/sports";

export const fetchSports = () => {
  return {
    type: "fetch/sports",
    payload: sports,
  };
};
