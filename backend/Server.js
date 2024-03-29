const express = require('express');
const { Database, aql } = require('arangojs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());



const db = new Database({
  url: 'http://localhost:8529',
  databaseName: '_system',
});

const Collection = db.collection('hierarchical');





app.get('/api/hierarchical', async (req, res) => {
  try {
    const cursor = await db.query(aql`
      FOR doc IN ${Collection}
      RETURN doc
    `);
    const data = await cursor.all();
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
