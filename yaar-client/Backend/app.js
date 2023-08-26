const PORT = 3005;
const express = require('express');
const app = express();

const expenses = require('./routes/expenseRoutes')
require('./db/connect')
const connectDB = require('./db/connect');
require('dotenv').config(); 

//middleware
app.use(express.static('./public'));
app.use(express.json());
const cors = require('cors');
// //routes
// app.get('/api/expenses', (req, res) => {
//     res.send("Expense Tracker API");
// }); 

app.use(cors()); //allows all origins
app.use('/api/expenses', expenses);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
}

start();