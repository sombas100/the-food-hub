import jwt from 'jsonwebtoken';
import config from '../config/default';

const generateToken = (userid: string) => {
    return jwt.sign({ id: userid }, config.JWT_SECRET, { expiresIn: '1h'})
};

export default generateToken;