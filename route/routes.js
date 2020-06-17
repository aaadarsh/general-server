var express = require ('express');
var router = express.Router();

const Item = require('../model/shoppingItem');


//GET
router.get('/items', (req,res,next)=>{
    // res.send('Testing route');
    Item.find(function(err,items){
        if(err){
            res.json(err);

        } else{
            res.json(items);   //res.json is a method in express
        }
    });
})


//POST
router.post('/item', (req,res,next)=>{
    let newShoppingItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought

        
    });

    newShoppingItem.save((err,item)=>{
        if(err){
            res.json(err);

        } else{
            res.json({msg: 'Item has been added to the DB'});
        }
    })
});

//PUT 
router.put('/item/:id', (req,res,next)=>{
    Item.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
    
        }
    },

    function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    
        
    });
    
});

//DELETE method
router.delete('/item/:id', (req,res,next)=>{
    Item.deleteOne({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


//================trial runs of CRUD OPERATIONS=============================//
//get method
// router.get('/find', (req,res)=>{
//     res.send("get something");
// });

//post method 2

// router.post("/addname", (req, res) => {
//     
//     var myData = new Item(req.body);    
//     myData.save()
//     .then(item => {
//     res.send("item saved to database");
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
//    });
  
   // post method 3

//    router.post('/addpost', (req,res,next)=>{
//     var myData = new Item(req.body);
//     myData.save((err,item)=>{
//         if(err){
//             res.json(err);

//         } else{
//             res.json({msg: 'Item has been added to the DB'});
//         }
//     })
// });

module.exports = router;

