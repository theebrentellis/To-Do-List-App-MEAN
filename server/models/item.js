var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({
    item: String
});

mongoose.model("Item", ItemSchema);