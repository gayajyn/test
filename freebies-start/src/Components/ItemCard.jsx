import React from 'react'

function ItemCard() {
    return (
        <div className="mx-auto h-fit w-fit">
            {/* BOX */}
            <div className="h-[400px] w-[400px] rounded-md-border border-black bg-white shadow-x1">
                {/* IMAGE */}
                <img
                    className="mx-auto my-4 h-[200px] w-4/5 rounded-lg object-cover" 
                    src="cosmos-3711568_1280.jpg"
                    alt="Flower"
                />
                {/* TEXT */}
                <div className="mx-4">
                    <h1 className="inter-semibold text-3xl">Another Flower</h1>
                    {/* Listing */}
                    <div className="inter-regular text-md flex py-2 text-gary500">
                        <p>2 interested | </p>
                        <p className="px-1">Listed 5 days ago</p>
                    </div>
                    {/* Status */}
                    <div className="flex justify-between py-2">
                        <p className="inter-semibold py-1 text-lg text-emerald-500">AVAILABLE</p>
                        <button className="inter-semibold border-amber h-10 w-24 rounded-x1 border-4 border-secondary font-bold text-primary duration-300 hover:bg-secondary hover:text-white">
                            BID
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;