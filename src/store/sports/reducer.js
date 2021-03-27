const initialState = [];

export default function users(state = initialState, { type, payload }) {
  switch (type) {
    case "fetch/sports":
      return [...state, ...payload];
    default:
      return state;
  }
}
