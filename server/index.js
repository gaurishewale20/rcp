import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';
import passRoutes from './routes/pass.js';
import dotenv from 'dotenv';

import forgotRoutes from './routes/forgot.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/pass",passRoutes);

app.use("/forgot", forgotRoutes);

const port =  process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(port,()=>console.log(`Server running successfully at PORT: ${port}`)))
    .catch((error)=>console.log(`Due to ${error}, server did not connect`));

mongoose.set('useFindAndModify',false);