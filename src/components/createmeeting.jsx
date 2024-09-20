import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
const CreateMeeting = () => {
  const [roomID, setRoomID] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h1">
        Videocall and Meetings for Everyone
      </Typography>
      <Typography variant="h6" component="h2">
        Connect collaborate and celebrate from anywhere
      </Typography>
      <div style={{ display: 'flex', gap: '10px', marginTop: '5%' }}>
        <TextField
          onChange={(e) => setRoomID(e.target.value)}
          placeholder="Enter Meeting ID "
          size="medium"
        ></TextField>
        <Button
          href={`http://localhost:3000/room?roomId=${roomID}`}
          variant="contained"
        >
          CREATE MEETING
        </Button>
      </div>
    </div>
  );
};

export default CreateMeeting;
