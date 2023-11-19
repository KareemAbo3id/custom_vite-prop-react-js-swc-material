import { useState } from 'react';
import { Container, Typography, TextField } from '@mui/material';

function App() {
  const [name, setName] = useState('');
  const handleChange = (e) => setName(e.target.value);

  return (
    <Container sx={{ my: 5 }}>
      <TextField
        id="name"
        label="Type Your Name"
        value={name}
        onChange={handleChange}
      />
      <Typography variant="body2" color="initial">
        hello, {name}
      </Typography>
    </Container>
  );
}

export default App;
