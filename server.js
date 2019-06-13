const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/contacts', require('./Routes/contacts'));

app.get('/', (req, res) => {
	res.send({ msg: 'Welcome to the contact API' });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
