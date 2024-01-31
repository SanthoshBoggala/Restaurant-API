require('dotenv').config();

const express = require('express');
const cors = require('cors'); 
const app = express();

const dbConnect = require('./Db/dbConnect');
const errorHandler = require('./Middlewares/errorHandler');

app.use(express.json());
app.use(cors());

const userRoutes = require('./Routes/userRoutes');
const categoriesRoutes = require('./Routes/categoriesRoutes');
const menuRoutes = require('./Routes/menuItemRoutes');
const reviewsRoutes = require('./Routes/reviewsRoutes');
const ordersRoutes = require('./Routes/ordersRoutes');
const reportsRoutes = require('./Routes/reportsRoutes');


app.use('/api', userRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/reports', reportsRoutes);

app.use(errorHandler);


const startServer = async (port ,url) => {
    try {
        await dbConnect(url)
            .then(()=>{
                app.listen(port, ()=>{
                    console.log(`server listening on ${port}...`)
                })
            })
            .catch((err)=> console.log(err))
    } catch (error) {
        console.log(err);
    }
}

startServer(process.env.PORT || 5000, process.env.DBURL);
