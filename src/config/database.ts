import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const URI = process.env.URI_DATABASE || "";

mongoose.connect(URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected'); 
});