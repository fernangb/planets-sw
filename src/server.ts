import "reflect-metadata"; 
import express from 'express';
import routes from './routes';
import './typeorm';


const app = express();
app.use(express.json());

app.use(routes);
app.use

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
})

app.listen(3333, () => {
    console.log("----- Server started on port 3333 -----");
})