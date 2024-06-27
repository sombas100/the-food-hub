import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => ({ 
    folder: 'food_ordering_app', 
    allowed_formats: ['jpg', 'png'],
  }),
});


const upload = multer({ storage });

export { cloudinary, upload };
