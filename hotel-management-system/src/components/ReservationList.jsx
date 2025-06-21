import React, { useEffect, useState } from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', checkIn: '', checkOut: '' });

  const fetchReservations = async () => {
    const res = await fetch('http://localhost:5000/reservations');
    const data = await res.json();
    setReservations(data);
  };

  const fetchRooms = async () => {
    const res = await fetch('http://localhost:5000/rooms');
    const data = await res.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchReservations();
    fetchRooms();
  }, []);

  const getRoomName = (roomId) => {
    const room = rooms.find((r) => r.id === parseInt(roomId));
    return room ? room.name : 'Unknown';
  };

  const handleEditClick = (reservation) => {
    setEditingId(reservation.id);
    setEditData({
      name: reservation.name,
      checkIn: reservation.checkIn,
      checkOut: reservation.checkOut
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSave = async () => {
    await fetch(`http://localhost:5000/reservations/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...editData, id: editingId })
    });
    setEditingId(null);
    fetchReservations();
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this reservation?");
    if (!confirm) return;

    await fetch(`http://localhost:5000/reservations/${id}`, {
      method: 'DELETE'
    });
    fetchReservations();
  };

  return (
    <div className="container mt-4">
      <h2>Reservation List</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Room</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res, index) => (
                <tr key={res.id}>
                  <td>{index + 1}</td>
                  <td>
                    {editingId === res.id ? (
                      <input type="text" name="name" value={editData.name} onChange={handleEditChange} className="form-control" />
                    ) : (
                      res.name
                    )}
                  </td>
                  <td>{getRoomName(res.roomId)}</td>
                  <td>
                    {editingId === res.id ? (
                      <input type="date" name="checkIn" value={editData.checkIn} onChange={handleEditChange} className="form-control" />
                    ) : (
                      res.checkIn
                    )}
                  </td>
                  <td>
                    {editingId === res.id ? (
                      <input type="date" name="checkOut" value={editData.checkOut} onChange={handleEditChange} className="form-control" />
                    ) : (
                      res.checkOut
                    )}
                  </td>
                  <td>
                    {editingId === res.id ? (
                      <>
                        <button className="btn btn-sm btn-success me-2" onClick={handleEditSave}>Save</button>
                        <button className="btn btn-sm btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(res)}>Edit</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(res.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReservationList;
