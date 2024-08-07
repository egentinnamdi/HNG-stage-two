import Navbar from "@/components/Navbar";
import TableSummary from "@/components/TableSummary";
import { Button } from "@/components/ui/button";
import { ArrowLeftSquare, Delete, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "lazysizes";

function Cart({ prodAdd, dispatch }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(-1);
  }
  function handleDelete(e) {
    console.log(+e.target.id);
    dispatch({ type: "delete", payload: +e.target.id });
  }
  return (
    <>
      <div className="min-h-screen p-5 space-y-3 bg-[#F5F5F5]">
        <ArrowLeftSquare className="h-10" onClick={handleNavigate} />
        <div className="relative min-h-[40vh] space-y-4">
          <ShoppingCart className="absolute  right-0 top-0 h-10 w-10 bg-primary p-2" />
          <h2 className="capitalize text-2xl font-medium">
            your shopping cart
          </h2>
          {prodAdd[0] ? (
            prodAdd.map((item) => {
              return (
                <div
                  className="flex  h-full items-center justify-center"
                  key={item.image}
                >
                  <div className="bg-white rounded-2xl grid place-items-center ">
                    <img
                      data-src={item.image}
                      className="lazyload h-52 p-3"
                      data-sizes="auto"
                      alt={item.prodName}
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-5 justify-center pl-5 space-y-6 text-lg  relative">
                    <span>{item.prodName}</span>
                    <span>{item.price}</span>
                    <Delete
                      id={item.id}
                      className="absolute right-6 top-16 h-16 cursor-pointer"
                      onClick={handleDelete}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex text-center  flex-col space-y-7  items-center justify-center h-full capitalize text-xl font-normal">
              <p>you currently have no item in your cart</p>
              <button className=" capitalize text-xl  px-10 py-3 bg-white border-2 border-green text-black  rounded-lg">
                <Link to="/home">add to cart</Link>
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between items-center h-[40vh] ">
          <h3 className="capitalize  text-2xl font-medium mb-5">
            order summary
          </h3>
          <div className="w-full  min-h-64">
            <TableSummary />
          </div>
          <Button className="capitalize text-xl  px-10 py-3 bg-green text-black font-semibold rounded-lg">
            <Link to="/checkout">check out</Link>
          </Button>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Cart;
