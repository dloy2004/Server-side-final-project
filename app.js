import express from 'express';
import cors from 'cors';
import { memberRouter } from './router/memberRouter.js';
import {incomesRouter} from './router/incomesRouer.js';
import { childrenRouter } from './router/childrenRouter.js';
import { expensesRouter } from './router/expensesRouter.js';
import {supportsRouter } from './router/supportsRouter.js';
import {propertyRouter } from './router/propertyRouter.js';
import {debtsRouter } from './router/debtsRouter.js';
import {userRouter } from './router/userRouter.js';
import {bankRouter } from './router/bankRouter.js';
import { memberInListRouter } from './router/memberInListRouter.js'





const corsOptions = {
    origin: 'http://localhost:5173'
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/users',userRouter)
app.use('/member', memberRouter);
app.use('/memberInList', memberInListRouter);
app.use('/children', childrenRouter);
app.use('/incomes', incomesRouter);
app.use('/expenses', expensesRouter);
app.use('/supports', supportsRouter);
app.use('/bankAccount', bankRouter);
app.use('/property', propertyRouter);
app.use('/debts', debtsRouter);


app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", 8080);
});