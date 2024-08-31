import express from 'express';



const router = express.Router();


//Get all Blogs
router.get('/', (req, res) =>{
    res.json({mssg : "Welcome to U-Blog!"})
})


//Gett
router.get('/:id', (req, res) =>{
    res.json({mssg : "Welcome to U-Blog!"})
})

export default router;