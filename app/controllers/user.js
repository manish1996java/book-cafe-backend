const Category = require("../models/category");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createHash = (password) => {
  return bcrypt.hashSync(password, 10);
};

const createCategory = (req,res,next) => {
  let {id, parent, ancestors} = req.body;
  parent = parent ? parent : null;
  ancestors = ancestors? ancestors : [];
  const model = new Category({
    _id:id,
    parent:parent??parent,
    ancestors: ancestors??ancestors
  });
  model.save().then(d=>{
    console.log(d)
    res.status(200).json({
      message:'successful',
      data: d
    });
  }).catch(err=>{
    res.status(400).json({
      message:'Server Error'
    });
  })
}

const createCategories = (req,res,next) => {
  let {level1,level2,level3,level4} = req.body;
  Category.insertMany([
    {_id:level1,parent:null},
    {_id:level2,parent:level1,ancestors:level1},
    {_id:level3,parent:level2,ancestors:[level1,level2]},
    {_id:level4,parent:level3,ancestors:[level1,level2,level3]},
  ]).then(d=>{
    console.log(d)
    res.status(200).json({
      message:'successful',
      data: d
    });
  }).catch(err=>{
    console.log(err);
    res.status(400).json({
      message:'Server Error'
    });
  })
} 

const getCategory = (req,res,next) => { 
  let {id} = req.query;
  id = id?id:null;
  Category.find({parent:id}).then(d=>{
    res.status(200).json({
      message:'successful',
      data: d
    });
  }).catch(err=>{
    res.status(400).json({
      message:'Server Error'
    });
  })
}

module.exports = {
  createCategories,
  createCategory,
  getCategory
};
