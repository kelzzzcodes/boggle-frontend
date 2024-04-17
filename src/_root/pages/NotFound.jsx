import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../../assets/error.png";

const NotFound = () => {
    return ( 
        <div className="w-full h-screen text-center py-8">
            <img src={errorimg} alt="404" className="mx-auto max-w-full h-auto" />
            <h1 class="text-4xl font-medium capitalize text-[#12B7D2]">We've looked everywhere.....</h1>
            <p class="mt-3 font-medium text-lg">The page you're looking for is missing or doesn't exist.</p>
            <p class="mb-5 font-medium text-lg">What would you like to do?</p>
            <Link to="/"><button className="py-[10px] px-[20px] bg-[#000] text-white border-[none] rounded-[5px] text-[16px] cursor-pointer hover:bg-[#333] font-medium">Return to Home</button></Link>
            <Link to="/"><div class="text-[#12B7D2] text-sm mt-4 font-semibold cursor-pointer">Report a Problem</div></Link>
        </div>
     );
}
 
export default NotFound;