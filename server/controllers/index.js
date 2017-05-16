
const House = require('../models/house');

let controllers = {}

//get all house selling
controllers.getDataAll = (req,res)=>{
  House.find({}, (err,data)=>{
    if(err) res.send(err)
    res.send(data)
  })
}

//get one house selling
controllers.getDataOne = (req,res)=>{
  House.findById(req.params.id, (err,data)=>{
    if(err) res.send(err)
    res.send(data)
  })
}

//create house selling
controllers.create = (req,res, next)=>{
  var newhouse = House({
    owner     : req.body.owner,
    address   : req.body.address,
    image     : req.body.image,
    price     : req.body.price,
    phone     : req.body.phone,
    location : req.body.location
  })

  newhouse.save((err,result)=>{
    if(err) res.send(err)
    res.send(result)
  })
  console.log(newhouse);

}

//delete house selling
controllers.delete = (req,res)=>{
  House.findByIdAndRemove(req.params.id, (err,data)=>{
    if(err) res.send(err)
    res.send({status: 'ok'})
  })
}

//delete house selling
controllers.update = (req,res)=>{
  House.findById(req.params.id, (err,data)=>{

    data.owner     = req.body.owner   || data.owner,
    data.address   = req.body.address || data.address,
    data.image     = req.body.image   || data.image,
    data.price     = req.body.price   || data.price,
    data.phone     = req.body.phone   || data.phone
    data.location  = req.body.location|| data.location
    data.save((err, result)=>{
      if(err) res.send(err)
      res.send(result)
    })
  })
}



module.exports = controllers
