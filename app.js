const express = require('express');
const courses = require("./routes/api/management");
const mongoose = require("mongoose");
const pino = require('pino');
const expressPino = require('express-pino-logger');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });
function main () {
  let app = express(); 
  const port = process.env.PORT || 3000;
 
  var cors=require('cors');

  app.options('*', cors());
  app.use(express.json());

  app.use(expressLogger);
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use("/api/management", courses);

  const db = require("./config/keys").mongoURI;
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected for MANAGEMENT SERVICE"))
    .catch(err => console.log(err));
  
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();