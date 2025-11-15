require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const apiEndPoints = require('./router/entryRoute');
const { sequelize } = require('./models');


const corsOption = {
    origin: ["http://localhost:5173"],
    methods: "*",
    credential: true
}

app.use(cors(corsOption));
app.use(express.json());


app.use('/categoryWSWebApp', apiEndPoints)

app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: "The requested resource could found"
    })
})

sequelize.sync({ alter: true }).then(() => {
    console.log("DB Synced")
})

const serverPort = process.env.PORT;
app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
})