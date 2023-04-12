import { useState } from "react";
import "./App.css";
import ImageUploader from "./components/ImageUploader";
import Canvas from "./components/Canvas";
import ChooseFrameBox from "./components/ChooseFrameBox";

function App() {
  const [image, setImage] = useState<string>("");
  const [frameName, setFrameName] = useState<string>("");

  const handleUpload = (dataUrl: string) => {
    setImage(dataUrl);
  };

  const handleSave = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = "i-vote-mfp-2023.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };
  return (
    <div className="flex flex-col">
      <header className="flex mt-36 mb-10 flex-col items-center">
        <div className="text-8xl font-anakotmai-light text-anakotmai-orange">
          ฉันเลือก ก้าวไกล
        </div>
        <div className="block text-md font-anakotmai-light text-white font-normal">
          เลือก Frame ฉันเลือก ก้าวไกล ที่เหมาะกับ สไตล์คุณ และติด #ชวนที่บ้านกาก้าวไกล หรือ #กาก้าวไกลประเทศไทยไม่เหมือนเดิม
        </div>
      </header>
      <div className="flex justify-center  items-center">
        <div>
          <Canvas image={image} frameName={frameName} />
        </div>
        <div>
          <ChooseFrameBox
            onChange={(frameName) => {
              setFrameName(frameName);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-24">
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
