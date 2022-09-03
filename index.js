const express = require('express')
const some = require('./routes/tools.route')
const dbConnect = require('./utils/dbConnect')
const cors = require("cors")
const viewCounter = require('./middleware/viewCounter')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json())
// app.use(viewCounter);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
dbConnect()
app.use("/user", some)
// app.all('*', (res,req) => {
//   res.send("Nothing")
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})