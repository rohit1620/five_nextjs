import React from "react";
import Image from "next/image";

const StaticAssete = () => {
  return (
    <>
      <h1>static assest</h1>
      <h4>this image for chori</h4>
      <Image src="/chori.jpg" height={300} width={500} alt="chori ki iamge" />
    </>
  );
};

export default StaticAssete;
