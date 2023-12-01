const express = require("express");
const Collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get("/", cors(), (req, res) => {});

app.post("/sign-in", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const check = await Collection.findOne({ email: email });

    if (check) {
      res.json("Email already exists");
    } else {
      res.json("not exists");
    }
  } catch (error) {
    res.json("not exists");
  }
});

app.post("/sign-up", async (req, res) => {
  // const { username, email, password } = req.body;

  // const data = {
  //   username: username,
  //   email: email,
  //   password: password,
  // };

  // try {
  //   const check = await Collection.findOne({ email: email });

  //   if (check) {
  //     res.json("Email already exists");
  //   } else {
  //     res.json("not exists");
  //     await Collection.insertMany([data]);
  //   }
  // } catch (error) {
  //   res.json("not exists");
  // }

  Collection.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });

  app.listen(3000, () => {
    console.log("server started on port 3000");
  });
});
