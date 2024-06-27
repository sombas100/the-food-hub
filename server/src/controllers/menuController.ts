import { Request, Response } from "express";
import Menu from "../models/Menu";
import { cloudinary } from "../utils/cloudinary";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });


export const createMenuItem = async (req: Request, res: Response) => {
    const { name, price, description } = req.body;
    const image = req.file;

try {
    const imageUrl = await cloudinary.uploader.upload_stream((err, result) => {
        if (err) {
            throw new Error('Image upload failed');
        }
        return result?.secure_url;
    });

    const newMenuItem = await new Menu({ name, price, description, image: imageUrl });
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
} catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
}

}

export const getAllMenuItems = async (req: Request, res: Response) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getMenuItemById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const menuItem = await Menu.findById(id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        };
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateMenuItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    try {
        const menuItem = await Menu.findById(id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        menuItem.name = name || menuItem.name;
        menuItem.price = price || menuItem.price;
        menuItem.description = description || menuItem.description;

        await menuItem.save();
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const menuItem = await Menu.findByIdAndDelete(id);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.json({ message: 'Menu item successfully deleted' })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

