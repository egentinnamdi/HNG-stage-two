import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { Heart, ShoppingCart } from "lucide-react";

function ProductItems({ prodImg, id, index, productName, price }) {
  const image = `./${prodImg}.png`;
  return (
    <div
      id={id}
      style={{ translate: `-${100 * index}%` }}
      className={`transition-all duration-500 ease-in-out h-full  relative space-y-2 min-w-full scroll-smooth `}
    >
      <Heart className=" absolute right-7 top-7 text-gray-600" />
      <div className="rounded-2xl bg-white flex justify-center items-center py-5">
        <img
          data-src={image}
          data-sizes="auto"
          className="lazyload  h-60"
          alt={prodImg}
        />
      </div>
      <div className="flex flex-col capitalize text-lg relative pl-2">
        <span>{productName}</span>
        <span>{price}</span>
        <ShoppingCart className=" bg-primary p-1 absolute bottom-4 right-3" />
      </div>
    </div>
  );
}

export default ProductItems;
