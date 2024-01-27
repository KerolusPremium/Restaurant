const express = require('express');

const app = express();

//give him public to access
app.use(express.json())
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/imgs', express.static(__dirname + 'public/imgs'));

app.set('views', './public')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3002, (req, res) => {
    console.log('Server is running on port 3002');
})