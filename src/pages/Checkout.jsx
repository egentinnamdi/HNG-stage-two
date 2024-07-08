import ButtonGreen from "@/components/ButtonGreen";
import Navbar from "@/components/Navbar";
import { ArrowLeftSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PayImg from "@/components/PayImg";

function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen p-10 space-y-5">
        <ArrowLeftSquare className="h-10" onClick={() => navigate(-1)} />
        <h2 className="text-center capitalize font-medium text-2xl">
          proceed to payment
        </h2>
        <div className=" rounded-xl min-h-[40vh] space-y-16 flex flex-col ">
          <h3 className="h-1/6 capitalize text-2xl font-medium ">pay with</h3>
          <RadioGroup className=" h-32 rounded-2xl ">
            <div className="h-10 space-x-3 flex items-center">
              <RadioGroupItem
                className="bg-secondaryTwo "
                value="master-card"
                id="master-card"
              />
              <PayImg imgText="master-card" />
              <Label className="capitalize text-base " htmlFor="master-card">
                Pay using a master card
              </Label>
            </div>
            <div className="h-10 space-x-3 flex items-center">
              <RadioGroupItem
                className="bg-secondaryTwo "
                value="visa-card"
                id="visa-card"
              />
              <PayImg imgText="visa-card" />
              <Label className="capitalize text-base" htmlFor="visa-card">
                Pay using a visa card
              </Label>
            </div>
            <div className="h-10 space-x-3 flex items-center">
              <RadioGroupItem
                className="bg-secondaryTwo "
                value="bank-transfer"
                id="bank-transfer"
              />
              <PayImg imgText="bank-transfer" />
              <Label className="capitalize text-base" htmlFor="bank-transfer">
                Pay via bank transfer
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className=" h-[20vh] rounded-2xl flex flex-col justify-around items-center">
          <h3 className="flex justify-between w-full px-5 text-2xl">
            <span className="capitalize font-medium ">total cost</span>
            <span>$150</span>
          </h3>
          <span className="capitalize font-normal self-start pl-6 ">
            including basic shipping fee
          </span>
          <ButtonGreen>make payment</ButtonGreen>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Checkout;
