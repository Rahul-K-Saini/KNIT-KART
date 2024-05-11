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
        console.log(uploadedImages);
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


adRouter.post('/getAllAds', async (req, res) => {
    const ads = await Ad.find({});
    return res.json(ads);
})


adRouter.post('/getUserAds',async(req,res)=>{
    const {id} = req.body;
    const ads = await Ad.find({user:id});
    return res.json(ads);
})


adRouter.put('/updateAd', async (req, res) => {
    const {id} = req.body;
    try{
        await Ad.updateOne({_id:id},{
            $set:{
                title:req.body.title,
                description:req.body.description,
                price:req.body.price,
                category:req.body.category,
                exchange:req.body.exchange,
            }
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({error:e});
    }
    return res.json({message:"Ad Updated Successfully"});
    
})

adRouter.delete('/deleteAd/:id', async (req, res) => {
    const id = req.params.id; 
    try {
        const result = await Ad.deleteOne({ _id: id });
        console.log(result);
        return res.json({ message: "Ad Deleted Successfully" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: e });
    }
});


export default adRouter;
