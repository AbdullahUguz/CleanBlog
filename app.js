const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const blog = { 
        id: 1, 
        title: "Blog title", 
        description: "Blog description" 
    }
  res.send(photo);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatildi`);
});
