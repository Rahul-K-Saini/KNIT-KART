export const FeatureCard = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col justify-between items-center shadow-xl bg-gray-100 rounded">
            <img src="https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Feature Image" className="h-64 w-full bg-slate-500 rounded-t" />
            <div className='m-6'>
                <h2 className="text-xl text-gray-800 font-medium mb-2">{title}</h2>
                <p className="text-gray-800">{description}</p>
            </div>
        </div>
    );
};