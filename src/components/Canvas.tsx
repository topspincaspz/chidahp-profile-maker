import { useEffect, useRef } from "react";
import frameOne from "../assets/frame/frame2023-01.png";
import frameTwo from "../assets/frame/frame2023-02.png";
import frameThree from "../assets/frame/frame2023-03.png";
import frameFour from "../assets/frame/frame2023-04.png";
import frameFive from "../assets/frame/frame2023-05.png";
import frameSix from "../assets/frame/frame2023-06.png";

interface ICanvasProps {
  image: string;
  frameName?: string;
}

function Canvas(props: ICanvasProps) {
  const { image, frameName = "4" } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageFrame = (file: string) => {
    switch (file) {
      case "1":
        return frameOne;
      case "2":
        return frameTwo;
      case "3":
        return frameThree;
      case "4":
        return frameFour;
      case "5":
        return frameFive;
      case "6":
        return frameSix;
      default:
        return frameOne;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const image1 = new Image();
      image1.src = image;

      const image2 = new Image();
      image2.src = handleImageFrame(frameName);

      image1.onload = () => {
        context.drawImage(image1, 0, 0, canvas.width, canvas.height);
      };

      image2.onload = () => {
        context.globalAlpha = 1;
        context.drawImage(image1, 0, 0, canvas.width, canvas.height);
        context.drawImage(image2, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [frameName]);

  return <canvas ref={canvasRef} width="400" height="400" />;
}

export default Canvas;
