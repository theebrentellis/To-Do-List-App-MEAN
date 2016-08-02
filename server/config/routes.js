var list = require("./../controllers/list.js");

module.exports = function(app){
    app.get("/list", function(req, res){
        list.getAll(req, res);
    });

    app.post("/create", function(req, res){
        list.create(req, res);
    });

    app.post("/delete_item/:item_id", function(req, res){
        list.delete_item(req, res);
    });
};