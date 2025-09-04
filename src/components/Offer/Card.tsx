import { useState } from "react";
import { Button } from "../Button";

type Props = {
  title: string;
  description: string;
  price: string;
  list: string[];
  benefits: string;
};

const cardStyle =
  "absolute w-full h-full bg-lightGray shadow-xl rounded-2xl p-6 flex flex-col justify-around backface-hidden text-gray-700";

const Card = ({ title, description, price, list, benefits }: Props) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div className="relative w-md cursor-pointer" onClick={handleClick}>
      <div
        className={`relative w-full hover:scale-105 h-full duration-700 transform-style-preserve-3d ${
          flip ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className={cardStyle}>
          <h5 className="text-center text-primaryGreen uppercase font-bold text-xl mb-4">
            {title}
          </h5>
          <p className="text-sm ">{description}</p>
          <ul className="list-disc list-inside  text-sm space-y-1 mt-4">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* BACK */}
        <div className={`${cardStyle}  rotate-y-180 items-center`}>
          <p className="mb-2 flex flex-col items-center">
            <span className="font-bold">Korzyści:</span> {benefits}
          </p>
          <p className="mb-2 flex flex-col items-center">
            <span className="font-bold">Średnia cena:</span> {price} zł
          </p>
          <Button text="kontakt" />
        </div>
      </div>
    </div>
  );
};

export { Card };
