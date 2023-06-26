import'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req,resp)=>{
    resp.send('Hello World');
})

app.listen(3000,()=>{
    console.log(process.env.ENVIRONMENT);
    console.log("Example app listening on port 3000!");
});