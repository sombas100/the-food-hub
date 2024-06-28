import mongoose, { Schema, Document } from 'mongoose';

interface IResturant extends Document {
    name: string;
    address: string;
}

const ResturantSchema: Schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true }
});

const Resturant = mongoose.model<IResturant>('Resturant', ResturantSchema);
export default Resturant;