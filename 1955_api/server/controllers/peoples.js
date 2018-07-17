const mongoose = require('mongoose');
const Person = mongoose.model('Person');
// The constant Person is what will be used for querying or database interaction ///////////////
module.exports = {
    index: (req, res)=>{
        Person.find({}, (err, data)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', error: err})
            }
            else{
                res.json({message: 'Success', peeps: data})
            }
        })
    },
    new_penguin: (req, res)=>{
        Person.create({name: req.params.name}, (err, new_penguin)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', error: err})
            }
            else{
                res.json({message: 'Success', new_penguin})
            }
        })
    },
    remove: (req, res)=>{
        Person.remove({name: req.params.name}, (err)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', err})
            }
            else{
                res.json({message: 'Success'})
            }
        })
    },
    info: (req, res)=>{
        Person.findOne({name: req.params.name}, (err, target)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', err})
            }
            else{
                res.json({message: 'Success', target})
            }
        })
    },
}
