import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import Videos from "./dbVideoModel.js";

import cors from "cors";
// App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = `mongodb+srv://root:admin@cluster0.ytzmi.mongodb.net/tiktok?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
// app.use(cors());

// CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello tiktokers");
});

// app.post("/v1/posts", (req, res) => {
//   res.status(200).send(data);
// });

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("errro", err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/v2/posts", (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log("errro", err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost : ${port}`));
