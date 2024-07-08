import NavbarDesktop from "@/components/NavbarDesktop";
import "lazysizes";

function HomeDesktop() {
  return (
    <div className="h-[90vh] bg-secondary grid grid-rows-[1fr_4fr] grid-cols-[1.5fr_2fr] p-10 pb-0">
      <div className="bg-orange-500 "></div>
      <NavbarDesktop />
      <div className="bg-red-500 "></div>
      <div className="flex justify-center items-end ">
        <img
          data-src="/man-jacket.png"
          alt="man-jacket"
          className="lazyload h-full"
          data-sizes="auto"
        />
      </div>
      <div className="bg-blue-500 "></div>
    </div>
  );
}

export default HomeDesktop;
