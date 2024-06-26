import mongoose, { Schema, Document } from "mongoose";;

interface IMenu extends Document {
    name: string;
    price: string;
    description: string;
    image: string;
}

const MenuSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

const Menu = mongoose.model<IMenu>('Menu', MenuSchema);
export default Menu;