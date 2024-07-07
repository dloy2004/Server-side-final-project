// import express from 'express';
// import cors from 'cors';
// import { memberRouter } from './router/memberRouter.js';
// import {incomesRouter} from './router/incomesRouer.js';
// import { childrenRouter } from './router/childrenRouter.js';
// import { expensesRouter } from './router/expensesRouter.js';
// import {supportsRouter } from './router/supportsRouter.js';
// import {propertyRouter } from './router/propertyRouter.js';
// import {debtsRouter } from './router/debtsRouter.js';
// import {userRouter } from './router/userRouter.js';
// import {bankRouter } from './router/bankRouter.js';

// const app = express();
// const corsOptions = {
//     origin: 'http://localhost:5173'
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use('/users',userRouter);
// app.use('/member', memberRouter);
// app.use('/children', childrenRouter);
// app.use('/incomes', incomesRouter);
// app.use('/expenses', expensesRouter);
// app.use('/supports', supportsRouter);
// app.use('/bankAccount', bankRouter);
// app.use('/property', propertyRouter);
// app.use('/debts', debtsRouter);


// app.listen(8080, () => {
//     console.log("Server listening on PORT", 8080);
// });

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { memberRouter } from './router/memberRouter.js';
import { incomesRouter } from './router/incomesRouer.js';
import { childrenRouter } from './router/childrenRouter.js';
import { expensesRouter } from './router/expensesRouter.js';
import { supportsRouter } from './router/supportsRouter.js';
import { propertyRouter } from './router/propertyRouter.js';
import { debtsRouter } from './router/debtsRouter.js';
import { userRouter } from './router/userRouter.js';
import { bankRouter } from './router/bankRouter.js';
import { verifyToken } from './middleWare/authMiddleware.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use('/users', userRouter);
app.use('/member', verifyToken, memberRouter);
app.use('/children', verifyToken, childrenRouter);
app.use('/incomes', verifyToken, incomesRouter);
app.use('/expenses', verifyToken, expensesRouter);
app.use('/supports', verifyToken, supportsRouter);
app.use('/bankAccount', verifyToken, bankRouter);
app.use('/property', verifyToken, propertyRouter);
app.use('/debts', verifyToken, debtsRouter);

app.listen(8080, () => {
    console.log("Server listening on PORT", 8080);
});
