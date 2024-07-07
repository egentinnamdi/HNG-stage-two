import ProductItems from "./ProductItems";

function ProductList() {
  return (
    <div className="min-h-[40vh] bg-secondaryTwo text-black text-2xl p-10 space-y-3">
      <h2 className="capitalize pl-2 font-medium">best seller</h2>{" "}
      <div className="flex overflow-scroll min-w-screen gap-5">
        <ProductItems prodImg="shirt" />
        <ProductItems prodImg="shirt" />
        <ProductItems prodImg="shirt" />
        <ProductItems prodImg="shirt" />
      </div>
    </div>
  );
}

export default ProductList;
