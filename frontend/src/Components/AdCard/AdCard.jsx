import React from 'react'

const AdCard = ({ ad }) => {
    console.log(ad.imageURL)
    return (
        <>
            <div className="relative place-self-center flex w-80 flex-col mt-16 mb-16 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div
                    className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-cover bg-center text-white shadow-lg shadow-blue-gray-500/40`}
                    style={{ backgroundImage: `url(${ad.imageURL})` }}
                ></div>

                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {ad.productName}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {ad.description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Edit Ad
                    </button>
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-danger hover:bg-dangerHover ml-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Delete Ad
                    </button>
                </div>
            </div>
        </>
    )
}

export default AdCard