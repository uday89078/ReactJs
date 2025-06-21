const initialState = {
  roomList: [],
  loading: false,
  error: null
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ROOMS_LOADING':
      return { ...state, loading: true };
    case 'ROOMS_SUCCESS':
      return { ...state, loading: false, roomList: action.payload };
    case 'ROOMS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default roomReducer;
