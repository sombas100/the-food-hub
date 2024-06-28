import express from 'express';
import { createRestaurant, 
    getAllRestaurants, 
    getRestaurantById, 
    updateRestaurantById, 
    deleteRestaurantById 
} from '../controllers/resturantController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/restaurants', authMiddleware, createRestaurant);
router.get('/restaurants', getAllRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.put('/restaurants/:id', authMiddleware, updateRestaurantById);
router.delete('/restaurants/:id', authMiddleware, deleteRestaurantById);

export default router;
