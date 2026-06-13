const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/profile', (req, res) => {
  res.json({
    greeting: 'Hi, my name is',
    name: 'Vinisha Gupta.',
    tagline: 'Turning complex ideas into elegant solutions.',
    description:
      "I'm a Full-Stack Developer passionate about UI/UX design and problem-solving through Data Structures & Algorithms. I build scalable web applications, integrate backend systems, and create intuitive, user-friendly experiences."
  });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
