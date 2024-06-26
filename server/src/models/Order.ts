import mongoose, { Schema, Document } from 'mongoose';

interface IOrder {
    user: mongoose.Types.ObjectId;
    items: { menuId: mongoose.Types.ObjectId; quantity: number }[];
    status: string;
    total: number;
}

const OrderSchema: Schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            menuId: { type: mongoose.Types.ObjectId, ref: 'Menu', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    status: { type: String, default: 'Pending' },
    total: { type: Number, required: true },
})

const Order = mongoose.model<IOrder>('Order', OrderSchema);
export default Order;