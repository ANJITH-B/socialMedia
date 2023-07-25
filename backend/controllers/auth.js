import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import user from "../models/User"

// register user

export const register = async(req, res) => {
    try{
        const{
            firstName,
            LastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body ;
        
        const salt =await bcrypt.genSalt():
        const newUser = 
    }
}