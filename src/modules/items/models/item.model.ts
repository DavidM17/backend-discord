import { model, Schema } from "mongoose";

const item = new Schema({
  name: {type: String, required: true },
  description: {type: String, required: true },
},
{
  timestamps: true,
  versionKey: false
});

export default model("Item", item);