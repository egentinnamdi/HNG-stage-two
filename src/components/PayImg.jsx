import "lazysizes";

function PayImg({ imgText }) {
  return (
    <div className="h-7 w-7 inline-block">
      <img
        data-src={`/${imgText}.png`}
        alt={imgText}
        className="lazyload h-full w-full"
        data-sizes="auto"
      />
    </div>
  );
}

export default PayImg;
