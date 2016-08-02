var mongoose = require("mongoose");

var Item = mongoose.model("Item");

module.exports = (function(){
    return {
        getAll: function(req, res){
            Item.find({}, function(err, results){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(results);
                }
            });
        },
        create: function(req, res){
            var item = new Item({item: req.body.text});
            item.save(function(err, results){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(results);
                }
            });
        },
        delete_item: function(req, res){
            Item.remove({_id: req.params.item_id}, function(err, results){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(results);
                }
            });
        },
    };
})();