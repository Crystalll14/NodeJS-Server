const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 4000;
const API_KEY = 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637';
const API_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';

app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'Accept': 'application/json'
      }
    });

    const { setup, punchline } = response.data.body[0];
    const joke = `${setup} ${punchline}`;
    res.json({ joke });
  } 
    catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
