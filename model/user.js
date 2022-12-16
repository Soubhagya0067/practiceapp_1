import { Schema, models, model } from "mongoose";

const userSchema = new Schema ({
    firstname: String,
    lastname: String,
    email: String,
    password:String,
    birthday:String,
    gender:String
})

const Employee = models.Employees || model('Employee', userSchema)

export default Employee