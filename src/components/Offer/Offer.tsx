import { cards } from "../../data/cards";
import { Card } from "./Card";

const Offer = () => {
  return (
    <section id="offer" className="h-screen flex  flex-col p-10 bg-lightGray">
      <div className=" flex justify-center p-10">
        <h3 className="text-black uppercase text-4xl font-light ">
          co oferujemy
        </h3>
      </div>
      <div className="w-full h-full flex gap-10">
        {cards.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export { Offer };
