const Puppy =require('../../models/puppy');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne

};

//! Before rewriting using async:

// function index(req, res) {
//     Puppy.find({})
//         .then(puppies => res.json({puppies}))
//         .catch(err => res.status(500).json(err))
// }

async function index(req, res) {
    const puppies = await Puppy.find({});
    res.status(200).json(puppies);
}

//! With try-catch block for error handling:

// async function index(req, res) {
//     try{
//         const puppies = await Puppy.find({});
//         res.status(200).json(puppies);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }

//! Before rewriting with async:

// function create(req, res) {
//     Puppy.create(req.body)
//         .then(puppy => res.json(puppy))
//         .catch(err => res.status(500).json(err))
// }

async function create(req, res) {
    const puppy = await Puppy.create(req.body);
    res.status(201).json(puppy);
}

//! With try-catch block for error handling:

// async function create(req, res) {
//     try{
//         const puppy = await Puppy.create(req.body);
//         res.status(201).json(puppy);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }

//! Before rewriting with async:

// function show(req, res) {
//     Puppy.findById(req.params.id)
//     .then (puppy => res.json(puppy))
//     .catch(err => res.status(500).json(err))
// }

async function show(req, res) {
    const puppy = await Puppy.findById(req.params.id);
    res.status(200).json(puppy);
}

//! With try-catch block for error handling:

// async function show(req, res) {
//     try{
//         const puppy = await Puppy.findById(req.params.id);
//         res.status(200).json(puppy);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }

//! Before rewriting with async:

// function update(req, res) {
//     Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then (puppy => res.json(puppy))
//     .catch(err => res.status(500).json(err))
// }

async function update(req, res) {
    const updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedPuppy);
}

//! With try-catch block for error handling:

// async function update(req, res) {
//     try{
//         const updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         res.status(200).json(updatedPuppy);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }

//! Before rewriting with async:

// function deleteOne(req, res) {
//     Puppy.findByIdAndDelete(req.params.id)
//     .then (puppy => res.json(puppy))
//     .catch(err => res.status(500).json(err))
// }

async function deleteOne(req, res) {
    const deletedPuppy = await Puppy.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPuppy);
}

//! With try-catch block for error handling:

// async function delete(req, res) {
//     try{
//         const deletedPuppy = await Puppy.findByIdAndRemove(req.params.id);
//         res.status(200).json(deletedPuppy);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }