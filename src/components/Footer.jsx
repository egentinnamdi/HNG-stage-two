// const date = new Date() - new Date();
const counter = [
  {
    name: "days",
    value: 2,
  },
  {
    name: "hours",
    value: 5,
  },
  {
    name: "minutes",
    value: 55,
  },
  {
    name: "seconds",
    value: 43,
  },
];

function Footer() {
  return (
    <div className="bg-secondary min-h-32 p-5 space-y-4">
      <h2 className="capitalize text-2xl text-center">sales ends soon</h2>
      <div className=" w-full h-16 rounded-2xl flex justify-around">
        {counter.map((item) => (
          <div className="flex flex-col space-y-1" key={item}>
            <div className="bg-[#1B2C22] rounded-lg min-h-12 min-w-12 grid place-items-center text-xl">
              {item.value}
            </div>
            <span className="block capitalize">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
