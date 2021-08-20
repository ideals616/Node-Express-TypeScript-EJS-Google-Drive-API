import { GoogleDriveService } from './src/gdrive-api';
const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/api/getfiles', async (req, res, next) => {
    const files = await new GoogleDriveService().searchFolder();
    res.json(files);
})

app.use('/static', express.static('static'));
app.use('/scss', express.static('scss'));

// app.listen(3001, () => console.info("Server is hosting on *.3001"));
app.listen(80, () => console.info("Server is hosting on http://18.222.24.245/"));