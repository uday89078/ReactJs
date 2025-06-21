import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'ROOMS_LOADING' });
    fetch('http://localhost:5000/rooms')
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        dispatch({ type: 'ROOMS_SUCCESS', payload: data });
      })
      .catch((err) => {
        dispatch({ type: 'ROOMS_ERROR', payload: err.message });
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Rooms</h2>
      <div className="row">
        {rooms.map((room) => (
          <div className="col-md-4" key={room.id}>
            <div className="card mb-4 shadow">
              <div className="card-body">
                <h5 className="card-title">{room.name}</h5>
                <p className="card-text">Type: {room.type}</p>
                <p className="card-text text-muted">
                  {room.available ? 'Available' : 'Booked'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
