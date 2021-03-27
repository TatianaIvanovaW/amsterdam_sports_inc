const initialState = [];

export default function users(state = initialState, { type, payload }) {
  switch (type) {
    case "fetch/users":
      return [...payload];
    default:
      return state;
  }
}
