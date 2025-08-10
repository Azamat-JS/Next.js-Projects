import { serverSideFunction } from "@/utils/server-utls";
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from "@/components/ImageSlider";


const ServerRoute = () => {
    const result = serverSideFunction()

  return (
    <>
    <h1>Server route {result}</h1>
    <ImageSlider />
    </>
  );
}

export default ServerRoute