const express = require('express')
const cookieParser = require("cookie-parser");
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cookieParser());

// cors policy
app.use(
    cors({
      origin: ['http://localhost:3000'], // Your allowed origin
      credentials: true, // Allow cookies to be sent
    })
);




app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})
