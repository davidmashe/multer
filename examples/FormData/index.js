const express = require('express');
const app = express();
const multer  = require('multer')

const PORT = 3000;

const upload = multer({ dest: './public/data/uploads/' })

app.use('/', express.static('public'));

app.post('/stats', upload.single('uploaded_file'), function (req, res) { 
   res.send('you posted');
});

app.get('/bruh', (req, res) => res.json({ message: 'bruh' }));

app.listen(PORT, () => console.log(`multer example listening on ${PORT}!`));