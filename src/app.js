const express = require('express');
const app = express();


app.use(express.static('public'));
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('main', {
        
        title: "MyWeb",
        program: "Node.js"
    });

    });


app.all('*', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
    console.log("loading...");
});
