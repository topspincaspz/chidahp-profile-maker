import { useEffect, useRef } from "react";
import frameOne from "../assets/frame/frame2023-01.png";
import frameTwo from "../assets/frame/frame2023-02.png";
import frameThree from "../assets/frame/frame2023-03.png";
import frameFour from "../assets/frame/frame2023-04.png";
import frameFive from "../assets/frame/frame2023-05.png";
import frameSix from "../assets/frame/frame2023-06.png";
import frameKaitom from "../assets/frame/frame2023-kaitom.png";
import { isEmpty } from "lodash";
import { useMediaQuery } from "react-responsive";

interface ICanvasProps {
  image: string;
  frameName?: string | null;
}

function Canvas(props: ICanvasProps) {
  const { image, frameName = null } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediumScreen = useMediaQuery({
    query: "(max-width: 720px)",
  });
  const handleImageFrame = (file: string | null) => {
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
      const imageFromUser = new Image();
      imageFromUser.src = !isEmpty(image) ? image : frameKaitom;
      imageFromUser.onload = () => {
        context.drawImage(imageFromUser, 0, 0, canvas.width, canvas.height);
        context.drawImage(imageFrame, 0, 0, canvas.width, canvas.height);
      }
      const imageFrame = new Image();
      imageFrame.src = handleImageFrame(frameName);

      imageFrame.onload = () => {
        context.globalAlpha = 1;
        context.drawImage(imageFromUser, 0, 0, canvas.width, canvas.height);
        context.drawImage(imageFrame, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [frameName, image, mediumScreen]);

  const sizeCanvasProps = !mediumScreen ? {
    width: '420',
    height: '420'
  } : {
    width: '320',
    height: '320'
  }
  return <canvas ref={canvasRef} {...sizeCanvasProps} />;
}

export default Canvas;
