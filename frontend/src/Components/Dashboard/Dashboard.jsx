import React from 'react'
import AdCard from '../AdCard/AdCard';

const Dashboard = () => {
    const DUMMY_DATA = [
        {
            id: 1,
            productName: "MSD ka Cricket Bat",
            category: "Sports",
            description: "DSC Wooden Bat with white grip. easy to hit Six with my bat",
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/A_Modern_Cricket_Bat.jpg'
        },
        {
            id: 2,
            productName: "JBL Headphone",
            category: "Wearable",
            description: "Amazing Sound Quality, Brand New Product with bluetooth support",
            imageURL: 'https://rukminim1.flixcart.com/blobio/1160/1160/imr-201907/blobio-imr-201907_cf6670eb0079426fab6ef9c538290065.jpg'

        },
        {
            id: 3,
            productName: "Mechanical Keyboard",
            category: "Gaming",
            description: "A very nice and fully working Gaming keyboard. Must have for pro gamers.",
            imageURL: 'https://hips.hearstapps.com/hmg-prod/images/pop-mechanical-keyboards-64e4ce5645fe9.jpg'
        }
    ]
    return (
        <>
            <div className='flex flex-row justify-evenly mt-4'>
                {DUMMY_DATA.map((ad) => <AdCard key={ad.id} ad={ad} />)}
            </div>

        </>
    )
}

export default Dashboard;