const initialState = {
  reservationList: [],
  loading: false,
  error: null
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVATIONS_LOADING':
      return { ...state, loading: true };
    case 'RESERVATIONS_SUCCESS':
      return { ...state, loading: false, reservationList: action.payload };
    case 'RESERVATIONS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reservationReducer;
