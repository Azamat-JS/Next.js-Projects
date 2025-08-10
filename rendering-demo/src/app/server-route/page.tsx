import { serverSideFunction } from "@/utils/server-utls";
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