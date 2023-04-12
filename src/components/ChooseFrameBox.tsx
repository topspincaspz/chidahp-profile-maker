import { useEffect, useState } from "react";
import frameOne from "../assets/frame/frame2023-01.png";
import frameTwo from "../assets/frame/frame2023-02.png";
import frameThree from "../assets/frame/frame2023-03.png";
import frameFour from "../assets/frame/frame2023-04.png";
import frameFive from "../assets/frame/frame2023-05.png";
import frameSix from "../assets/frame/frame2023-06.png";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

interface IChooseFrameBoxProps {
  onChange(frameName: string): void;
}

function ChooseFrameBox({ onChange }: IChooseFrameBoxProps) {
  const [frameName, setFrameName] = useState("1");
  const mediumScreen = useMediaQuery({
    query: "(max-width: 720px)",
  });
  useEffect(() => {
    onChange(frameName);
  }, [frameName]);

  const imgSizeProps = !mediumScreen ? {
    width: '70px',
    height: '40px',
  } : {
    width: '50px',
    height: '20px'
  }
  
  return (
    <div
      className={classNames("bg-slate-300", "justify-between", { "ml-4": !mediumScreen, "mt-4": mediumScreen}, "flex", {
        "flex-col": !mediumScreen,
      })}
    >
      <img
        src={frameOne}
        {...imgSizeProps}
        alt="1"
        className="cursor-pointer bg-red"
        onClick={() => setFrameName("1")}
      />
      <img
        src={frameTwo}
        {...imgSizeProps}
        alt="2"
        className="cursor-pointer"
        onClick={() => setFrameName("2")}
      />
      <img
        src={frameThree}
        {...imgSizeProps}
        alt="3"
        className="cursor-pointer"
        onClick={() => setFrameName("3")}
      />
      <img
        src={frameFour}
        {...imgSizeProps}
        alt="4"
        className="cursor-pointer"
        onClick={() => setFrameName("4")}
      />
      <img
        src={frameFive}
        {...imgSizeProps}
        alt="5"
        className="cursor-pointer"
        onClick={() => setFrameName("5")}
      />
      <img
        src={frameSix}
        {...imgSizeProps}
        alt="6"
        className="cursor-pointer"
        onClick={() => setFrameName("6")}
      />
    </div>
  );
}

export default ChooseFrameBox;
