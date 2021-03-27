const initialState = [];

export default function users(state = initialState, { type, payload }) {
  switch (type) {
    case "fetch/sports":
      return [...payload];
    default:
      return state;
  }
}
