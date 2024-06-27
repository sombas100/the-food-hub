import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://sparkyvids:1Yf0oAJFbqq2oyGh@foodhub.yec3meg.mongodb.net/',
    JWT_SECRET: process.env.JWT_SECRET || '90384678372705665927129336115597032075752518916412',
    CLOUDINARY_URL: process.env.CLOUDINARY_URL || 'CLOUDINARY_URL=cloudinary://283864215395792:uIrRwK7u8bmiD79t_VIGZH1ntc0@dpn4r5nrt',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'sk_test_51PLSeAJb6cOrRIXxxPARgeSnFSiRCluZf3obKWPdONKlp29ggwuY49RGQAUN9kGG3XA1gH9jLMFQRZNE5QetSTE600Moz2KkYC',

}
     