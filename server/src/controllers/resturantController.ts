import { Request, Response } from "express";
import Restaurant, { IRestaurant }from "../models/Restaurant";

export const createRestaurant = async (req: Request, res: Response) => {
    const { name, location } = req.body;

    try {
        const newRestaurant = new Restaurant({
            name,
            location,
        });

        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error', error})
    }
};


export const  getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const resturants = await Restaurant.find();
        res.json(resturants);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
export const getRestaurantById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error })
    }
};

export const updateRestaurantById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, location } = req.body;

    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { name, location }, { new: true });
        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' })
        }
        res.json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};

export const deleteRestaurantById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        if (!deletedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}