import { serverSideFunction } from "@/utils/server-utls";
import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from '@/utils/client-utils';


const ServerRoute = () => {
    const result = serverSideFunction()
 const res = clientSideFunction()
  return (
    <>
    <h1>Server route {result}</h1>
    <h1>{res} Client only</h1>
    <ImageSlider />
    </>
  );
}

export default ServerRoute