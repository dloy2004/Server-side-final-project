import jwt from 'jsonwebtoken';

const SECRET_KEY = '3q5GJ#k9$!s@L2&F';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.userName = decoded.userName;
        next();
    });
};
