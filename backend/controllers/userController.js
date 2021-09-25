import asynchandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

//@desc Auth User and get token
//@route POST /api/users/login
//@access public

const authUser = asynchandler(async (req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            age: user.age,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
})

//@desc Register User
//@route POST /api/users
//@access public

const registerUser = asynchandler(async (req,res) => {
    const {name, email, age, password} = req.body;

    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error('Email already registered');
    }

    const user = await User.create({
        name, email,age,password
    });

    if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          age: user.age,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }
})

//@desc GET User profile
//@route POST /api/users/profile
//@access private

const getUserProfile = asynchandler(async (req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          age: user.age
        })
    } else {
        res.status(404);
        throw new Error('User Not found');
    }
})


//@desc Update User profile
//@route PUT /api/users/profile
//@access private

const updateUserProfile = asynchandler (async (req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.age = req.body.age || user.age;
        if(req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            age: updatedUser.age,
            token: generateToken(updatedUser._id),
          });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
})

export {authUser, registerUser, getUserProfile, updateUserProfile}