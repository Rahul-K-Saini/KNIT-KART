export const FeatureCard = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col justify-between items-center shadow-xl rounded" style={{ backgroundColor: "#faf9f6", color: "#333333" }}>
            <img src={imageUrl} alt="Feature Image" className="h-64 w-full bg-slate-500 rounded-t" />
            <div className='m-6'>
                <h2 className="text-xl font-medium mb-2">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};