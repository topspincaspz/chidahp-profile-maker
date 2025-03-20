import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import Canvas from "./components/Canvas";
import ChooseFrameBox from "./components/ChooseFrameBox";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import CanvasHidden from "./components/CasvasHidden";
import { tv } from "tailwind-variants";


const header = tv({
  base: "font-anakotmai-light text-anakotmai-black"
})
function App() {
  const [image, setImage] = useState<string>("");
  const mediumScreen = useMediaQuery({
    query: "(max-width: 720px)",
  });
  const smallScreen = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const [frameName, setFrameName] = useState<string>("");
  const largeScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const handleUpload = (dataUrl: string) => {
    setImage(dataUrl);
  };

  const handleSave = () => {
    const canvas = document.querySelector("#canvas-hidden") as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "i-vote-mfp-2023.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  // Adjust styles for different screen sizes
  const headerSize = classNames(header(),
    { "text-6xl": largeScreen },
    { "text-4xl": !largeScreen && !mediumScreen },
    { "text-2xl": mediumScreen },
    { "text-xl": smallScreen },
    { "word-spacing-1": true },
    { "mb-4": true }
  );

  return (
    <div className="flex flex-col">
      <header className={classNames("flex", "flex-col", "items-center", "mb-10", { "mt-24": largeScreen, "mt-20": !largeScreen && !mediumScreen, "mt-16": mediumScreen, "mt-12": smallScreen })}>
        <div
          className={headerSize}
        >
          นักเรียนชูโล่สายไหนที่เหมาะกับคุณ!
        </div>
        <div
          className={classNames("font-anakotmai-light", "text-white", "block", "text-center", {
            "text-md": !mediumScreen,
            "text-sm": mediumScreen,
            "text-center mt-4": mediumScreen
          })}
        >
          <span> เลือก Frame ชูโล่สายที่เหมาะกับคุณ</span>
          <span className="block">และ Share รูปภาพของคุณกับเพื่อนๆ กัน อย่าลืมติด #ชี้ดาบ #ชูโล่วิทยาคม</span>
        </div>
      </header>
      <div
        className={classNames("flex", "justify-center", "items-center", {
          "flex-col": mediumScreen,
        })}
      >
        <div>
          <Canvas image={image} frameName={frameName} />
          <CanvasHidden image={image} frameName={frameName} />
        </div>
        <div>
          <ChooseFrameBox
            onChange={(frameName) => {
              setFrameName(frameName);
            }}
          />
        </div>
      </div>
      <div  className={classNames("flex", "justify-center", { "mt-24": !mediumScreen, "mt-16": mediumScreen, "mb-4": !mediumScreen || mediumScreen })}>
        <ImageUploader onUpload={handleUpload} />
        {image && (
          <button
            onClick={handleSave}
            className="ml-4 bg-anakotmai-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded font-anakotmai-light"
          >
            บันทึกรูปภาพ
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
