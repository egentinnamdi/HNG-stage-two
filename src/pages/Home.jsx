import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewCollecs from "@/components/NewCollecs";
import ProductList from "@/components/ProductList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const cardObj = [
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

function Home({ prodAdd, dispatch }) {
  // const [active, setActive] = useState(1);
  return (
    <div className="min-h-screen bg-secondary text-white relative flex flex-col ">
      <Carousel className="">
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
        <CarouselPrevious className="bg-black absolute  top-2/4 left-11" />
        <CarouselNext className="bg-black absolute  top-2/4 bottom-0 right-11 " />
      </Carousel>
      <NewCollecs />
      <ProductList prodAdd={prodAdd} dispatch={dispatch} />
      <Footer />
      <Navbar />
    </div>
  );
}

export default Home;
