import { Request, Response } from "express";
import Order from "../models/Order";
import Stripe from 'stripe';
import config from '../config/default';

interface AuthenticatedRequest extends Request {
    userId: string;
}

const stripe = new Stripe(config.STRIPE_SECRET_KEY);


export const createOrder = async (req: AuthenticatedRequest, res: Response) => {
    const { items, total, paymentMethodId } = req.body;

    try {
        const user = req.userId;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total * 100,
            currency: 'gbp',
            payment_method: paymentMethodId,
            confirm: true,
        });

        const newOrder = new Order({ user, items, total, status: 'Pending' });
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error '})
    }
};


export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find().populate('user').populate('items.menu');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).populate('user').populate('items.menuId');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.status = status || order.status;
        await order.save();

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order successfully deleted '});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}