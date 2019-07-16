const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const path = require('path');

//Connect Datebase
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/contacts', require('./Routes/contacts'));

// app.get('/', (req, res) => {
// 	res.send({ msg: 'Welcome to the contact API' });
// });

//Serve Static Assets in production
if (process.env.NODE_ENV === 'production') {
	//Set Static Folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	);
}
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
