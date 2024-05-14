import React from "react";
import AdCard from "@/Components/AdCard/AdCard";

const DashboardSection = ({ userAds, deleteAd }) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 bg-background'>
                {userAds.map((ad) => <AdCard key={ad.id} ad={ad} deleteAd={deleteAd} />)}
            </div>
        </div>
    );
};

export default DashboardSection;
