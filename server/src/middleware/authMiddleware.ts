import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import config from '../config/default';
import { AuthenticatedRequest } from "../types/express";


const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Token received in middleware:', token)
    if (!token) {
        return res.status(401).json({ message: 'No token, Authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET) as { id: string };
        console.log('Decoded:', decoded)
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware;