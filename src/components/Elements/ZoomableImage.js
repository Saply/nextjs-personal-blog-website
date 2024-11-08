import Image from "next/image";
import { useState } from "react";

const ZoomableImage = ({ src, width, height, alt, sizes, factor = 1.5 }) => {
  const [zoom, setZoom] = useState(false);

  return (
    <div onClick={() => setZoom(!zoom)} className="cursor-pointer">
      <Image
        src={src}
        width={zoom ? width * factor : width}
        height={zoom ? height * factor : height}
        alt={alt}
        sizes={sizes}
      />
    </div>
  );
};

export default ZoomableImage;
