import { useState } from "react";
import ProductItems from "./ProductItems";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

function ProductList() {
  const [index, setIndex] = useState(0);
  const products = [
    {
      id: 0,
      product: "shirt",
      productName: "Slim Fit T-Shirts",
      price: "$130/ $100",
    },
    {
      id: 1,
      product: "shirt",
      productName: "Slim Fit T-Shirts",
      price: "$130/ $100",
    },
    {
      id: 2,
      product: "shirt",
      productName: "Slim Fit T-Shirts",
      price: "$130/ $100",
    },
    {
      id: 3,
      product: "shirt",
      productName: "Slim Fit T-Shirts",
      price: "$130/ $100",
    },
  ];
  function handleNext() {
    if (index === products.length - 1) {
      return setIndex(0);
    }
    setIndex((prev) => prev + 1);
  }
  function handlePrevious() {
    if (index === 0) {
      return setIndex(products.length - 1);
    }
    setIndex((prev) => prev - 1);
  }
  return (
    <div className="min-h-[40vh] bg-secondaryTwo text-black text-2xl p-10 space-y-3 relative">
      <h2 className="capitalize pl-2 font-medium">best seller</h2>{" "}
      <div className="flex overflow-hidden min-w-screen">
        {products.map((item) => (
          <ProductItems
            prodImg={item.product}
            index={index}
            productName={item.productName}
            price={item.price}
            key={item.product}
          />
        ))}
      </div>
      <ArrowBigLeft
        onClick={handlePrevious}
        className="absolute top-0 bottom-0  h-full w-9 stroke-green"
      />
      <ArrowBigRight
        onClick={handleNext}
        className="absolute top-0 bottom-0 right-10  h-full w-9 stroke-green"
      />
    </div>
  );
}

export default ProductList;
