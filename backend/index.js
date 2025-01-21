// Import the Express module using ES Modules syntax
import express from 'express';
import authRoutes from "./routes/auth.js"
// Initialize an Express application
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
  import cors from "cors";
dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(cors({origin:["http://localhost:5173"],credentials:true}));
// const bodyParser = require('body-parser');

// Use body-parser to parse JSON request bodies
// app.use(bodyParser.json());

// Use the environment variable for the port or default to 3000
const PORT =  3000;


// here is the routes 
app.use('/api/auth',authRoutes);




//   connect the data base here 

mongoose.connect("mongodb+srv://salkan1890:S4u2dVLxv3nwoAPx@owaishkhan18.xoa9h.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true, dbName: "sellApp" });
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
