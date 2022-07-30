const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {type:String,require:true},
    userId: {type:String,unique:true,require:true},
    password: {type:String,require:true},
    phone: Number,
    testSubjects: [{type:mongoose.Types.ObjectId}],
    isActive: Boolean,
});

module.exports = mongoose.model('user', schema);


