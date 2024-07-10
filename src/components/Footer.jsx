import { useEffect, useRef, useState } from "react";
function Footer() {
  const [date, setDate] = useState(new Date());
  const [intersect, setIntersect] = useState(false);
  const target = useRef(null);
  useEffect(function () {
    const observer = new IntersectionObserver((entries) => {
      setIntersect(entries[0].isIntersecting);
    });
    observer.observe(target.current);
    // return () => {
    //   if (target.current) {
    //     observer.unobserve(target.current);
    //   }
    // };
  }, []);

  setInterval(function () {
    setDate(new Date());
  }, 1000);
  let newTIme = (new Date("2024-07-15") - date) / 1000;
  const days = Math.floor(newTIme / 86400);
  let remainder = newTIme % 86400;
  const hours = Math.floor(remainder / 3600);
  remainder %= 3600;
  const minutes = Math.floor(remainder / 60);
  let seconds = Math.floor(remainder % 60);
  const counter = [
    {
      name: "days",
      value: days,
    },
    {
      name: "hours",
      value: hours,
    },
    {
      name: "minutes",
      value: minutes,
    },
    {
      name: "seconds",
      value: seconds,
    },
  ];
  console.log(intersect);
  return (
    <div ref={target} className="bg-secondary min-h-32 p-5 space-y-4">
      <h2 className="capitalize text-2xl text-center">sales ends soon</h2>
      <div className=" w-full h-16 rounded-2xl flex justify-around">
        {counter.map((item) => (
          <div className="flex flex-col space-y-1 text-center" key={item.name}>
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
