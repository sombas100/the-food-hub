import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://sparkyvids:1Yf0oAJFbqq2oyGh@foodhub.yec3meg.mongodb.net/'
}