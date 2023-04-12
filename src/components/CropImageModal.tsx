import { Modal, Slider } from "antd";
import { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import getCroppedImg from "../utils/getCroppedImage";

interface ICropImageModalProps {
  isModalOpen: boolean;
  onOk(cropped: string): void;
  image: string;
  onCancel(): void;
}

function CropImageModal(props: ICropImageModalProps) {
  const { onOk, onCancel, isModalOpen, image } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  return (
    <Modal
      title="Crop รูปภาพที่ต้องการ หรือหากขนาดพอดีแล้วกด OK"
      open={isModalOpen}
      onOk={async () => {
				const cropped = await getCroppedImg(image, croppedAreaPixels, 0)
				onOk(cropped)
			}}
      onCancel={onCancel}
			okButtonProps={{
				style: {
					background: 'rgb(246, 131, 74)'
				}
			}}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 200,
          background: "#333",
        }}
      >
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <Slider onChange={(value) => setZoom(value)} min={1}/>
    </Modal>
  );
}

export default CropImageModal;
