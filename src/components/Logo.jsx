function Logo() {
  return (
    <div className=" grid place-items-center">
      <img
        data-src="/logo.png"
        alt="logo"
        className="lazyload h-3/6 "
        data-sizes="auto"
      />
    </div>
  );
}

export default Logo;
