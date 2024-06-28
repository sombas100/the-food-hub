import { Router } from "express";
import { createOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder } from '../controllers/orderController';
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post('/', authMiddleware, createOrder);
router.get('/',authMiddleware, getAllOrders);
router.get('/:id', authMiddleware, getOrderById);
router.put('/:id', authMiddleware, updateOrderStatus);
router.delete('/:id', authMiddleware, deleteOrder);

export default router;