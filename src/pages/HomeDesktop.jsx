import Logo from "@/components/Logo";
import NavbarDesktop from "@/components/NavbarDesktop";
import ProdSliderDesk from "@/components/ProdSliderDesk";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "lazysizes";
import { cardObj } from "./Home";

function HomeDesktop() {
  return (
    <div className="h-[90vh] bg-secondary grid grid-rows-[1fr_4fr] grid-cols-[1.5fr_2fr] px-10 ">
      <Logo />
      <NavbarDesktop />
      <Carousel className="col-span-2 flex">
        <CarouselContent className="flex-grow">
          {cardObj.map((item) => {
            return (
              <CarouselItem
                className="grid grid-cols-2 grid-rows-1 "
                key={item.prodName}
              >
                <ProdSliderDesk
                  prodName={item.prodName}
                  prodText={item.prodText}
                  prodImg={item.prodImg}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-black absolute  top-2/4 left-11" />
        <CarouselNext className="bg-black absolute  top-2/4 bottom-0 right-11 " />
      </Carousel>
    </div>
  );
}

export default HomeDesktop;
