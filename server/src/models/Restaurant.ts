import mongoose, { Schema, Document } from 'mongoose';

export interface IRestaurant extends Document {
    name: string;
    location: string;
}

const RestaurantSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true }
});

const Restaurant = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);
export default Restaurant;