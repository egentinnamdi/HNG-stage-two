import Cards from "@/components/Cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardObj = [
  {
    prodName: "Autumn Jackets",
    prodText:
      "Unbeatable style, unbeatable prices Grab 30% off your favorite male wears on SegMac!",
    prodImg: "/man-jacket.png",
  },
  {
    prodName: "Men’s Jackets Collections",
    prodText:
      "Unbeatable style, unbeatable prices Grab 30% off your favorite male wears on SegMac!",
    prodImg: "/man-jacket-blue.png",
  },
  {
    prodName: "men’s Sunglasses Collections",
    prodText:
      "Unbeatable style, unbeatable prices Grab 30% off your favorite male wears on SegMac!",
    prodImg: "/man-top.png",
  },
];

function Home() {
  // const [active, setActive] = useState(1);
  return (
    <Carousel>
      <CarouselContent>
        {cardObj.map((item) => {
          return (
            <CarouselItem key={item.prodName}>
              <Cards
                prodName={item.prodName}
                prodText={item.prodText}
                prodImg={item.prodImg}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious className="bg-black absolute z-10" />
      <CarouselNext className="bg-black absolute z-10 left-96" /> */}
    </Carousel>
  );
}

export default Home;
