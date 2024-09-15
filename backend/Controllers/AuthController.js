import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/users.js";


export const Login = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ message: "Invalid email or password" }); 
        }

        // Generate JWT token
        const token = jwt.sign({UserId: user._id, email: user.email}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        // Return token to client
        res.json({token, mssg: "Login Successful"})
    } catch(error){
        console.error(error)
        res.status(500).json({mssg: "Server Error!!"})

    }

}


export const SignUp = async (req, res) => {
    const { email, password, userName } = req.body;
    try {

        const existingUser = await User.findOne({email});

        if(existingUser){
            res.status(400).json({mssg: "User already Exists!"})
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
        });

        // Save user to database
        res.status(201).json({mssg: "User registered successfully!"})
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({mssg: "Server error!"})
        
    }

}