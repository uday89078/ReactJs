import React from 'react';
import UserCard from './Componenet/UserCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      
      <UserCard
        avatar="https://assets1.ignimgs.com/2020/05/27/avatar-2-resumes-production-1590573236632_160w.jpg?width=1280"
        description="Avatar: The Way of Water, the sequel to the 2009 film, is a 2022 epic science fiction movie directed by James Cameron and released on December 16, 2022."
      />
      
    </div>
  );
}

export default App;