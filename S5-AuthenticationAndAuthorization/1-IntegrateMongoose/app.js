require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const {logger} = require('./middlewares/consoleLogger');
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const app = express();
app.use(express.json());


app.use(logger);

const coursesRouter =  require('./routes/coursesRoute');
const usersRouter =  require('./routes/usersRoute');

app.use('/api/v1/courses', coursesRouter)
app.use('/api/v1/users', usersRouter)

app.get('/', (req, res) => {
    res.send('Hello World');
})


// Connection Pool ==> set of open connection ==> keeping yopur connections hot
// Min: 5, max: 100  \\ Application Bootstraping
mongoose.connect(uri).then(() => {  
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${3000}`);        
    });
}).catch(err => {
    console.log('Error connecting to MongoDB Atlas', err);
});



