const mongoose = require("mongoose");
const stringSchema = new mongoose.Schema(
    {}
)

module.exports = mongoose.model("string", stringSchema);