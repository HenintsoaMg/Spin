import { Button } from "framework7-react";
import React, { useState } from "react";

const DATA = [
  {
    id: 0,
    text: "1",
    color: "red",
  },
  {
    id: 1,
    text: "2",
    color: "green",
  },
  {
    id: 2,
    text: "3",
    color: "yellow",
  },
  {
    id: 3,
    text: "4",
    color: "red",
  },
  {
    id: 4,
    text: "5",
    color: "green",
  },
  {
    id: 5,
    text: "6",
    color: "yellow",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const rotationVariants = shuffle([
  "bg-gray-700",
  "rotate-[53deg]",
  "rotate-[106deg]",
  "rotate-[159deg]",
  "rotate-[212deg]",
  "rotate-[265deg]",
]);
const bgVariants = shuffle([
  "bg-gray-700",
  "bg-red-700",
  "bg-green-700",
  "bg-yellow-500",
  "bg-yellow-700",
  "bg-cyan-700",
  "bg-purple-700",
  "bg-rose-700",
]);

const Sector = ({ text, index }) => {
  return (
    <div
      className={`absolute flex items-center justify-center transform translate-x-1/2 secteur ${rotationVariants[index]} ${bgVariants[index]}`}
    >
      {text}
    </div>
  );
};

const Spin = () => {
  const [data, setData] = useState(DATA);
  const arrayData = [...data];

  const makeSpin = () => {
    let spinner = document.getElementById("spinner");
    spinner.style.setProperty("--animation-iteration", 5);
    spinner.style.setProperty("--animation-delay", "1s");
    document.documentElement.style.setProperty("--animation-deg", "360deg");
    setTimeout(() => {
      spinner.style.setProperty("--animation-delay", "2s");
      spinner.style.setProperty("--animation-iteration", 5);
    }, 4500);
  };

  return (
    <div
      id="spinner"
      className={`w-96 h-96 bg-white rounded-full relative overflow-hidden border-blue-950 border-8`}
    >
      <Button
        raised
        fill
        className="absolute top-[39%] left-[39%] z-10 border-8 border-b-slate-800 border-t-slate-800 border-lime-600 border-r-lime-600 transform -translate-x-1/2 -translate-y-1/2 outline-none rounded-full h-20 w-20"
        onClick={makeSpin}
      >
        Spin
      </Button>
      {shuffle(arrayData).map(({ id, text }, index) => {
        return <Sector text={text} key={id} index={index} />;
      })}
    </div>
  );
};

export default Spin;
