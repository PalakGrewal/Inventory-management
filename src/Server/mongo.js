const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://YatharthM2609:Yatharth2002@cluster0.cxyyyzx.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const FormSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
 });

const Collection = mongoose.model("Collection", FormSchema);

module.exports = Collection;
