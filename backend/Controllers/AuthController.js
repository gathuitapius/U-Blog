const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

// Secret key for JWT
const JWT_SECRET = "your_secret_key_here"; // This should be stored securely


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
        const token = jwt.sign({UserId: user._id, email: user.email}, JWT_SECRET, {
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
            res.status(400).json({mssg: "User alredy Exists!"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = await new User({
            userName,
            email,
            password: hashedPassword
        });

        // Save user to database
        const user = await newUser.save();
        res.status(201).json({mssg: "User registered successfully!"})
        console.table(user)
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({mssg: "Server error!"})
        
    }

}