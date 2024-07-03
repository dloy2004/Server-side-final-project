import express from 'express';
import cors from 'cors';
import multer from 'multer'; // Import multer for file uploads
import { memberRouter } from './router/memberRouter.js';
import {incomesRouter} from './router/incomesRouer.js';
import { childrenRouter } from './router/childrenRouter.js';
import { expensesRouter } from './router/expensesRouter.js';
import {supportsRouter } from './router/supportsRouter.js';
import {propertyRouter } from './router/propertyRouter.js';
import {debtsRouter } from './router/debtsRouter.js';
import {userRouter } from './router/userRouter.js';
import {bankRouter } from './router/bankRouter.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173'
};
const upload = multer(); // Initialize multer for file uploads

app.use(cors(corsOptions));
app.use(express.json());
app.use('/users',userRouter)
app.use('/member', memberRouter);
app.use('/children', childrenRouter);
app.use('/incomes', incomesRouter);
app.use('/expenses', expensesRouter);
app.use('/supports', supportsRouter);
app.use('/bankAccount', bankRouter);
app.use('/property', propertyRouter);
app.use('/debts', debtsRouter);

// Handle file upload directly in app.js using multer
app.post('/member/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.status(200).send({
        message: 'File uploaded successfully',
        file: req.file,
    });
});

app.listen(8080, () => {
    console.log("Server listening on PORT", 8080);
});
