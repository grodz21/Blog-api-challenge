const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const blogPostRouter = require('./blog-post-router.js')

app.use(bodyParser.json());

app.use('/blogpost', blogPostRouter);

app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})