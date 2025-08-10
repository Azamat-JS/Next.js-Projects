import fs from 'fs'
import ClientComponentOne from './client-component-one';


const ServerComponentOne = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <>
    <div>ServerComponentOne</div>
    </>
  )
}

export default ServerComponentOne