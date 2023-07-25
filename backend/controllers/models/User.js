import mongoose from "mongoose";
const UserSchema =new mongoose.Schema(
    {
        fristName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        LastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        picturePath: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        friends: {
            type: Array,
            dedfault: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },{timespace : true}
);
const user = mongoose.model("User",UserSchema);