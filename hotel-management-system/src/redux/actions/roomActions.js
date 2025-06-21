export const fetchRooms = () => {
  return async (dispatch) => {
    dispatch({ type: 'ROOMS_LOADING' });

    try {
      const response = await fetch('http://localhost:5000/rooms');
      const data = await response.json();
      dispatch({ type: 'ROOMS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'ROOMS_ERROR', payload: error.message });
    }
  };
};
