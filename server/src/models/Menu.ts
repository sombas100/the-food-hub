import mongoose, { Schema, Document, mongo } from "mongoose";;

interface IMenu extends Document {
    name: string;
    price: string;
    description: string;
    image: string;
    resturant: string;
    createdBy: string;
}

const MenuSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    resturant: { type: mongoose.Types.ObjectId, ref: 'Resturant', required: true },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
});

const Menu = mongoose.model<IMenu>('Menu', MenuSchema);
export default Menu;