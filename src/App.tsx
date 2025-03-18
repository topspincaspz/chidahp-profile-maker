import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import Canvas from "./components/Canvas";
import ChooseFrameBox from "./components/ChooseFrameBox";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import CanvasHidden from "./components/CasvasHidden";
import { tv } from "tailwind-variants";


const header = tv({
  base: "font-anakotmai-light text-anakotmai-orange"
})
function App() {
  const [image, setImage] = useState<string>("");
  const mediumScreen = useMediaQuery({
    query: "(max-width: 720px)",
  });
  const [frameName, setFrameName] = useState<string>("");

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
  return (
    <div className="flex flex-col">
      <header className={classNames("flex", "flex-col", "items-center", "mb-10", { "mt-24": !mediumScreen, "mt-16": mediumScreen})}>
        <div
          className={classNames(header(),
            { "text-8xl": !mediumScreen },
            { "text-4xl": mediumScreen }
          )}
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
          <span> เลือก Frame ฉันเลือก ก้าวไกล ที่เหมาะกับ สไตล์คุณ</span>
          <span className="block">และติด #ชวนที่บ้านกาก้าวไกล หรือ #กาก้าวไกลประเทศไทยไม่เหมือนเดิม</span>
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
