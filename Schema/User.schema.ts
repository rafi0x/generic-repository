import { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    contact: String
})

const Users: [string, Schema] = ["User", UserSchema];
export default Users