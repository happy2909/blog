var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, unique: true, required: [true, "can't be empty"] },
  password: { type: String, required: [true, "can't be empty"] },
  email: { type: String, unique: true, match: [/\S+@\S+\.\S+/, "is invalid"] },
});

module.exports = mongoose.model("User", UserSchema);
