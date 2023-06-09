const express = require('express');
require('./db/config');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require("dotenv").config();

const userRouter = require('./routers/userRoutes')
const taskRouter = require('./routers/taskRoutes')

app.use(userRouter)
app.use(taskRouter)
    
app.listen(5000);



















