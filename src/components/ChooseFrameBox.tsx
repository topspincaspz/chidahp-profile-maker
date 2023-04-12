import { useEffect, useState } from "react";
import frameOne from "../assets/frame/frame2023-01.png";
import frameTwo from "../assets/frame/frame2023-02.png";
import frameThree from "../assets/frame/frame2023-03.png";
import frameFour from "../assets/frame/frame2023-04.png";
import frameFive from "../assets/frame/frame2023-05.png";
import frameSix from "../assets/frame/frame2023-06.png";

interface IChooseFrameBoxProps {
    onChange(frameName: string): void
}

function ChooseFrameBox({ onChange }: IChooseFrameBoxProps) {
  const [frameName, setFrameName] = useState("1");

  useEffect(() => {
    onChange(frameName)
  }, [frameName])
  return (
    <div>
      <img
        src={frameOne}
        width="60px"
        height="40px"
        alt="1"
        className="cursor-pointer"
        onClick={() => setFrameName("1")}
      />
      <img
        src={frameTwo}
        width="60px"
        height="40px"
        alt="2"
        className="cursor-pointer"
        onClick={() => setFrameName("2")}
      />
      <img
        src={frameThree}
        width="60px"
        height="40px"
        alt="3"
        className="cursor-pointer"
        onClick={() => setFrameName("3")}
      />
      <img
        src={frameFour}
        width="60px"
        height="40px"
        alt="4"
        className="cursor-pointer"
        onClick={() => setFrameName("4")}
      />
      <img
        src={frameFive}
        width="60px"
        height="40px"
        alt="5"
        className="cursor-pointer"
        onClick={() => setFrameName("5")}
      />
      <img
        src={frameSix}
        width="60px"
        height="40px"
        alt="6"
        className="cursor-pointer"
        onClick={() => setFrameName("6")}
      />
    </div>
  );
}

export default ChooseFrameBox;
