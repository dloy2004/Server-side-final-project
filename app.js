import express from 'express';
import cors from 'cors';
import { memberRouter } from './router/memberRouter';

import { childrenRouter } from './router/childrenRouter';

const corsOptions = {
    origin: 'http://localhost:5173'
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/users',userRouter)
app.use('/member', memberRouter);
app.use('/children', childrenRouter);
app.use('/incomes', incomesRouter);
app.use('/outcomes', outcomesRouter);
app.use('/supports', supportsRouter);


app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});