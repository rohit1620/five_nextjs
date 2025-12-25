import React from "react";
import Image from "next/image";
// import sandeep from "/sandeep.webp";

const ImageOptimization = () => {
  return (
    <div>
      <h1>Image optimization componenete</h1>
      {/* <img src="/sandeep.webp" alt="" height={500} width={600} /> */}
      <Image
        src="/sandeep.webp"
        height={500}
        width={600}
        alt="this image sandeep"
      />
      <Image
        src="https://images.pexels.com/photos/6598961/pexels-photo-6598961.jpeg"
        height={500}
        width={600}
        alt="this image sandeep"
      />
    </div>
  );
};

export default ImageOptimization;
