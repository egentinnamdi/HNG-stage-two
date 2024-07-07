function Cards({ prodName, prodText, prodImg }) {
  return (
    <div className="flex flex-col items-center py-12 space-y-5">
      <h1 className="text-5xl capitalize text-center ">{prodName}</h1>
      <p className="text-center font-light leading-loose">{prodText}</p>
      <button className="bg-primary text-black font-medium px-7 capitalize py-3 rounded-lg">
        open collection
      </button>
      <div>
        <img src={prodImg} alt={prodName} />
      </div>
    </div>
  );
}

export default Cards;
