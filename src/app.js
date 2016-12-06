const express = require('express');
const app = express();

app.use(express.static('public'));
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'pug');

app.all('*', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
});
