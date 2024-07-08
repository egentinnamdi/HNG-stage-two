import "lazysizes";
import { ShoppingCart } from "lucide-react";

function NewCollecs() {
  return (
    <div className="p-3  min-h-screen bg-white space-y-4 text-black">
      <h2 className="h-1/6  py-3  pl-1 capitalize font-medium text-xl">
        new collections
      </h2>
      <div className="bg-secondaryTwo rounded-2xl h-[50vh] p-5 pb-0 relative">
        <h3 className="capitalize  font-medium h-1/6">
          men&apos;s denim jacket
        </h3>
        <ShoppingCart className="h-7 w-7 bg-primary absolute right-8 top-4 p-1" />
        <div className="h-5/6 ">
          <img
            className="h-full m-auto lazyload"
            data-src="/man-jacket-no-curve.png"
            alt="man-jacket-no-curve"
            data-sizes="auto"
          />

          <button className="capitalize bg-[#181818] rounded-xl text-xl font-medium text-white  py-5 px-10 absolute right-2 bottom-3">
            discover now
          </button>
        </div>
      </div>
      <div className="h-[33vh] rounded-2xl bg-primary  flex relative">
        <div className="w-2/4 h-full flex">
          <img
            data-src="/man-top-no-curve.png"
            alt="man-top-no-curve"
            data-sizes="auto"
            className="lazyload flex-grow"
          />
        </div>
        <div className="w-2/4 space-y-3 flex flex-col text-center font-medium pt-5 text-lg">
          <span className=" ">Men’s Sunglasses Collections</span>
          <span>30% OFF</span>
        </div>
        <button className="capitalize bg-[#181818] rounded-xl text-xl font-medium text-white  py-5 px-10 absolute right-2 bottom-3">
          discover now
        </button>
      </div>
    </div>
  );
}

export default NewCollecs;
