const initialState = {};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case "fetch/user":
      return { ...state, ...payload };
    default:
      return state;
  }
}
