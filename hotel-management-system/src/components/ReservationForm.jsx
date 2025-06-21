import React, { useEffect, useState } from 'react';

const ReservationForm = () => {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    roomId: '',
    name: '',
    checkIn: '',
    checkOut: ''
  });

  const fetchRooms = async () => {
    const res = await fetch('http://localhost:5000/rooms');
    const data = await res.json();
    setRooms(data.filter(room => room.available));
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:5000/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    alert('Reservation Successful!');
    setFormData({ roomId: '', name: '', checkIn: '', checkOut: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Room</label>
          <select name="roomId" className="form-select" required value={formData.roomId} onChange={handleChange}>
            <option value="">-- Choose Room --</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} ({room.type})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Check-in Date</label>
          <input type="date" className="form-control" name="checkIn" required value={formData.checkIn} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Check-out Date</label>
          <input type="date" className="form-control" name="checkOut" required value={formData.checkOut} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-success">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
