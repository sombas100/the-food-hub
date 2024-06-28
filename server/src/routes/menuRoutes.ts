import { Router } from "express";
import { createMenuItem, getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem } from "../controllers/menuController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post('/',authMiddleware, createMenuItem);
router.get('/', authMiddleware, getAllMenuItems);
router.get('/:id', authMiddleware, getMenuItemById);
router.put('/:id', authMiddleware, updateMenuItem);
router.delete('/:id', authMiddleware, deleteMenuItem);

export default router;