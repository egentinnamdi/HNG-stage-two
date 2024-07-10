import Logo from "./Logo";
import NavbarDesktop from "./NavbarDesktop";

function StoreDesktop() {
  return (
    <div className="grid grid-cols-[1.5fr_2fr] grid-rows-[1fr_4fr] bg-secondaryTwo">
      <Logo />
      <NavbarDesktop />
      <div className="bg-secondaryTwo  min-h-screen  p-10 grid grid-cols-3 grid-rows-2 col-span-2 gap-10">
        <div className="bg-white p-5 rounded-2xl grid place-items-center">
          <img
            data-src="/shirt-blue.png"
            alt=""
            className="lazyload"
            data-sizes="auto"
          />
        </div>
        <div className="bg-white p-5 rounded-2xl grid place-items-center">
          <img
            data-src="/bag.png"
            alt=""
            className="lazyload"
            data-sizes="auto"
          />
        </div>
        <div className="bg-white p-5 rounded-2xl grid place-items-center">
          <img
            data-src="/glasses.png"
            alt=""
            className="lazyload"
            data-sizes="auto"
          />
        </div>
        <div className="bg-white p-5 rounded-2xl grid place-items-center">
          <img
            data-src="/shirt-brown.png"
            alt=""
            className="lazyload"
            data-sizes="auto"
          />
        </div>
        <div className="bg-white p-5 rounded-2xl grid place-items-center">
          <img
            data-src="/shirt.png"
            alt=""
            className="lazyload"
            data-sizes="auto"
          />
        </div>
        <div className="bg-white p-5 rounded-2xl grid place-items-center">
          <img
            data-src="/shoe.png"
            alt=""
            className="lazyload"
            data-sizes="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default StoreDesktop;
