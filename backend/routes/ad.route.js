import { Router } from "express";
import multer from 'multer';
import cloudinary from "../utils/cloudinary.js";
import Ad from "../models/ad.models.js";
import { promises as fs } from 'fs';

const upload = multer({ dest: 'uploads/' });

const adRouter = Router();

adRouter.post('/postad', upload.array('images'), async (req, res) => {

    try {
        const uploadedImages = [];
        
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            uploadedImages.push(result.secure_url);
            await fs.unlink(file.path);
        }

        const { id, title, description, price, category, exchange } = req.body;

        const newAd = {
            title,
            description,
            price,
            category,
            exchange,
            images: uploadedImages,
            user: id
        };

        const ad = await Ad.create(newAd);
        res.status(201).json(ad);
    } catch (error) {
        console.error('Error posting ad:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default adRouter;
