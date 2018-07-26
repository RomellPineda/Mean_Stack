const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (req, res)=>{
        Task.find({}, (err, data)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', error: err})
            }
            else{
                res.json(data)
            }
        })
    },
    info: (req, res)=>{
        Task.findOne({_id: req.params.id}, (err, target)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', err})
            }
            else{
                res.json(target)
            }
        })
    },
    new_task: (req, res)=>{
        Task.create({title: req.params.taskytask, description: req.params.description}, (err, new_taskytask)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', error: err})
            }
            else{
                res.json(new_taskytask)
            }
        })
    },
    update: (req, res)=>{
        Task.findByIdAndUpdate(req.params.id, {$set:{title: req.params.title, description: req.params.desc}}, (err, new_taskytask)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', error: err})
            }
            else{
                res.json(new_taskytask)
            }
        })
    },
    delete: (req, res)=>{
        Task.remove({_id: req.params.id}, (err, data)=>{
            if(err){
                console.log('Error:', err);
                res.json({message: 'Error', err})
            }
            else{
                res.json({message: 'Successfully removed', data})
            }
        })
    },
}
