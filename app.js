const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'photo name',
    desc: 'photo info',
  };
  res.send(photo);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatildi`);
});
