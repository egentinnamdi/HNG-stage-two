function NewCollecs() {
  return (
    <div className="p-3 min-h-screen bg-white space-y-4 text-black">
      <h2 className="h-1/6  py-3  pl-1 capitalize font-medium text-xl">
        new collections
      </h2>
      <div className="bg-secondaryTwo rounded-2xl h-[50vh] p-5">
        <h3 className="capitalize  font-medium h-1/6">mens's denim jacket</h3>
        <div className="h-5/6 relative">
          <img
            className="h-full m-auto "
            src="/man-jacket-no-curve.png"
            alt="man-jacket-no-curve"
          />
          <img
            className="h-24 w-20 absolute right-0 top-0 "
            src="/man-jacket-no-curve.png"
            alt="man-jacket-no-curve"
          />
        </div>
      </div>
      <div className="h-[30vh] rounded-2xl bg-green-600">hello</div>
    </div>
  );
}

export default NewCollecs;
