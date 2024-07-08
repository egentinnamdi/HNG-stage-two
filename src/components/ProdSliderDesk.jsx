function ProdSliderDesk({ prodName, prodText, prodImg }) {
  return (
    <>
      <div className="text-white flex flex-col items-center space-y-6">
        <h1 className="text-7xl capitalize text-center ">{prodName}</h1>
        <p className="text-center font-light leading-loose">{prodText}</p>
        <button className="bg-primary text-black font-medium px-7 w-2/4 capitalize py-4 text-xl rounded-lg">
          <a href="#collection">open collection</a>
        </button>
      </div>
      <div className="flex justify-center items-end ">
        <img
          data-src={prodImg}
          alt={prodImg}
          className="lazyload h-full"
          data-sizes="auto"
        />
      </div>
    </>
  );
}

export default ProdSliderDesk;
