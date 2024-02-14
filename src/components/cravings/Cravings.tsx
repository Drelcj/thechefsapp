import React from 'react';
import Image from 'next/image';

const Cravings = () => {
    return (
        <div className='pt-40'>
            <div className="py-10 relative min-h-screen bg-fixed bg-center bg-cover" style={{backgroundImage: "url('https://res.cloudinary.com/dt3czltxx/image/upload/v1706436902/Instant-Pot-Chicken-Shawarma-1600-2_qnfhsh.jpg')"}}>
            <div className="h-full flex items-center justify-center pt-10">
                <div className=" px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
                    <div className="bg-base-200 p-4 rounded-lg m-auto">
                        <figure>
                            <img src="https://res.cloudinary.com/dt3czltxx/image/upload/t_continental rice/v1706434941/WhatsApp_Image_2024-01-28_at_10.41.42_AM_tmdj4y.jpg" className="rounded-lg" />
                        </figure> 
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Coconut Rice</h2> 
                            <p className="mt-1">Have a taste of different mix and flavours blended into the Coconut rice experience</p>
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg m-auto">
                        <figure>
                            <img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1706436799/Instant-Pot-Chicken-Shawarma-1600-2_ucmfi3.png" className="rounded-lg" />
                        </figure> 
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Instant Pot Chicken Shawarma</h2> 
                            <p className="mt-1">It is a moment of satisfying cravings when you take a bite of a chicken straight from the kitchen pot!</p>
                        </div>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg m-auto pb-10">
                        <figure>
                            <img src="https://res.cloudinary.com/dt3czltxx/image/upload/t_continental rice/v1706434941/WhatsApp_Image_2024-01-28_at_10.41.42_AM_tmdj4y.jpg" className="rounded-lg" />
                        </figure> 
                        <div className="mt-2">
                            <h2 className="text-xl font-bold">Coconut rice</h2> 
                            <p className="mt-1">Have a taste of different mix and flavours blended into the Coconut rice experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Cravings;
