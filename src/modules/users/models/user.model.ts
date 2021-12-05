import { model, Schema } from "mongoose";

const user = new Schema({
  name: { type: String, required: true },
  email: {type: String, required: true, unique: true },
  sex: { type: String, required: true},
  password: { type: String, required: true },
},
  {
    timestamps: true,
    versionKey: false
  });

export default model("User", user);