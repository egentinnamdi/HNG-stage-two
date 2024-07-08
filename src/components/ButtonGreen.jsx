function ButtonGreen({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="capitalize text-xl  px-10 py-3 bg-green text-black font-semibold rounded-lg"
    >
      {children}
    </button>
  );
}

export default ButtonGreen;
