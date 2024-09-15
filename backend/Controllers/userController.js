import User from '../models/users.js'
import mongoose from 'mongoose';

//GET all user
export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find({}).sort({createdAt: -1});
        if(users.length < 1){
            return res.status(404).json({mssg: "No Available user"})
        }
        res.status(200).json(users)
    } catch(error){
        res.status(400).json({error: error.message});
    }


}
//GET a single user

export const getSingleUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({mssg:"Invalid User ID"})
    }
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({mssg:"User not found!"})
    }

    res.status(200).json(user);

}



//CREATE a Blog

export const RegisterUSer = async ( req, res ) =>{
    const {userName, email, password,role} = req.body;

    try{
        const user = await User.create({userName, email, password,role});
        res.status(200).json(user);

    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//Update Blog
export const updateUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg:"Invalid user ID"})
        }
    try{
    const user = await User.findByIdAndUpdate(id, {...req.body},{new:true})
    if(!user){ return res.status(404).json({mssg: "user not found"});}
    res.status(200).json(user)
    } catch(error) {
        return res.status(400).json({error: error.message})
    }

}

//DELETE a user
export const deleteUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"Invalid user ID"})
    }
    try{
    const user = await User.findOneAndDelete(id)

    if (!user) {
        return res.status(404).json({ mssg: "user not found" });
    }
    return res.status(200).json(user)

    } catch(error) {
     return res.status(400).json({error: error.message})   
    }
}
