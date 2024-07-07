import "lazysizes";

function Navbar() {
  return (
    <div className="sticky left-0 bottom-0 w-full bg-primary flex justify-evenly items-center h-16">
      <div>
        <img
          data-sizes="auto"
          className="lazyload"
          data-src="/telephone.png"
          alt="telephone"
        />
      </div>
      <div>
        <img
          data-sizes="auto"
          className="lazyload"
          data-src="/medal-light.png"
          alt="medal-light"
        />
      </div>
      <div>
        <img
          data-sizes="auto"
          className="lazyload"
          data-src="home.png"
          alt="home"
        />
      </div>
      <div>
        <img
          data-sizes="auto"
          className="lazyload"
          data-src="store.png"
          alt="store"
        />
      </div>
      <div>
        <img
          data-sizes="auto"
          className="lazyload"
          data-src="cart.png"
          alt="cart"
        />
      </div>
    </div>
  );
}

export default Navbar;
