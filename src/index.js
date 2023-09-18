require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { path } = require('express/lib/application');
const { handle } = require('express/lib/router');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const req = require('express/lib/request.js');
const sequelize = require('./config/database');
var azure = require('azure');
// var serviceBusService = azure.createServiceBusService();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'))

app.use('/users', usersRoutes);

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(PORT, () => {
        console.log(`Server run successfully on port ${PORT}`);
    });
})
.catch(err => {
    console.log(err)
});
