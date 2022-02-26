import { Schema } from "mongoose"

const DataSchema = new Schema({
    title: String,
    type: String,
    location: String,
    user: String
})

const Datas: [string, Schema] = ["Data", DataSchema];

export default Datas;