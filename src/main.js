import express from 'express';
import morgan from 'morgan';

const app = express();

const HOST = '0.0.0.0';
const PORT= 8081;

app.use(express.json())

app.get('/health',(req, res)=>{
    res.status(200).send({
        status:"success",
        data:"Ok",
        message: "Server is running, Hello Shon"
    })
})

app.use(express.json()); 
app.use(morgan('dev'))
app.listen(8080,()=>{
    console.log(`Server is running on host ${HOST} and port ${PORT}`);
})