import React from 'react'

function FeaturedItem() {
  return (
    <div className="mx-auto flex w-screen max-w-screenlg flex-col items-center py-8">
        {/* TITLE */}
        <h1 className="poppins-bold text-2xl text-center">Trending Item</h1>
        <hr class="mb-4 mt-2 w-1/3 border-black"></hr>
        {/* BOX */}
        <div className="mx-auto h-fit w-fit bg-white border-2 border-black rounded-lg">
            <div className="m-8 flex">
                <img src="flower-7941814_1280.jpg" alt="Flower" className="max-height 4rem h-[240px] w-[240px] bg-violet-500 border-2 border-black rounded-lg m-3"/>
            <div className="mx-8">
                <h1 className="poppins-bold text-2xl">Flowers</h1>
                <p className=" inter-regular text-lg text-gray-400">yada yada text</p>
                <br />
                <p className="inter-regular">yada yada yada yada slkdjfklsjflksd text</p>
                <br />
                {/* SELLING TYLE */}
                <div className="my-8 flex justify-between">
                    <p className="inter-semibold text-lg text-emerald-400">AVAILABLE</p>
                    <button className="inter-semibold border-amber h-10 w-24 rounded-x1 border-4 border-secondary font-bold text-primary duration-300 hover:bg-secondary hover:text-white">BID</button>
                    </div>
            </div>
            </div>
        </div> 

    </div>
  )
}

export default FeaturedItem
