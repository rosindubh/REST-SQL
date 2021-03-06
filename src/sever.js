const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./user/user.routes')
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(port, () => {
    console.log(`Clever Cloud listening on port ${port}`);
})