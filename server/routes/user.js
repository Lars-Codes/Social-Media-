const express = require('express');
const User = require('../models/user');
const router = express.Router(); 

router.get('/', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        console.log(users); 
        res.send(users);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});


router.get('/', async (req, res) => {
    try {
        const users = await User.userExists();
        console.log(users); 
        res.send(users);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});

router.post('/login', async (req, res) => {
    try {
      let user = await User.login(req.body);
      res.send({...user, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

router.get('/', async (req, res) => {
    try {
        const users = await User.getUser();
        console.log(users); 
        res.send(users);
    } catch(err){
        res.status(401).send({message: error.message});
    }
});

router.post('/register', async (req, res) => {
    try {
        let user = await User.register(req.body);
        res.send({...user, password: undefined})
    } catch(error) {
        res.status(401).send({message: error.message});
    }
})

router.put('/edit', async (req, res) => {
    try {
        const user = await User.editUser(req.body); 
        res.send({...user, password: undefined}); 
    } catch(error){
        res.status(401).send({message: error.message}); 
    }
})

router.delete('/delete', async (req, res) => {
    try {
        await User.deleteUser(req.body.userId); 
        res.send({success: "We'll miss you... :("}); 
    } catch(error) {
        res.status(401).send({message: error.message});
    }
})

module.exports = router; 