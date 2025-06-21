import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/login" element={<Login />} />

        <Route path="/reserve" element={
          <PrivateRoute>
            <ReservationForm />
          </PrivateRoute>
        } />

        <Route path="/reservations" element={
          <PrivateRoute>
            <ReservationList />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
