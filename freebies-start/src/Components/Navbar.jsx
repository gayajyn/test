import React from 'react';
import { PiBellSimple } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div>
        {/* CONTENT */}
        <div className="flex items-center justify-between px-8 py-4">
            <h1 className="poppins-bold text-3xl text-amber-400">UTD Freebies</h1>
            {/* NAV TEMS */}
            <div className="poppins-semibold flex gap-8 px-2 py-1 text-2x1">
            <p>new</p>
            <p>browse</p>
            <p>upload</p>
            </div>

            {/* ICONS */}
            <div className="flex gap-8">
                <PiBellSimple size={'2rem'} />
                <VscAccount size={'2rem'} />
            </div>

        </div>

    </div>
  )
}

export default Navbar