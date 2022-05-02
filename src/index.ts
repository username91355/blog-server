import express, {Express} from 'express';
import dotenv from 'dotenv';
import router from './routes';
import sequelize from './config/db.config';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/v1/', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('Server start on port: ', PORT));
    } catch (e) {
        console.log(e);
    }
};

start();